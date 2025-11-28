import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../..";
import type { TeamLineup } from "../../../types/storeTypes";
import { supabase } from "../../../util/lib/supabase/supabase";
import { type BaseState, initialBaseState } from "../../baseState";
import { fetchAllLeagueData } from "../../fetchAllLeagueDataThunk";

// -- See driversSlice for context on why this is separate -- //

export const fetchTeamLineupsByLeagueData = async (
  leagueId: number
): Promise<TeamLineup[]> => {
  const { data, error } = await supabase
    .from("team_lineup")
    .select("*")
    .eq("league_id", leagueId);
  if (error) throw new Error(error.message);
  return data as TeamLineup[];
};

export const fetchTeamLineupsByLeague = createAsyncThunk(
  "teamLineups/fetchByLeague",
  async (leagueId: number, { rejectWithValue }) => {
    try {
      const data = await fetchTeamLineupsByLeagueData(leagueId);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: BaseState<TeamLineup> = initialBaseState();

const teamLineupSlice = createSlice({
  name: "teamLineups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchTeamLineupsByLeague.fulfilled,
        (state, action: PayloadAction<TeamLineup[]>) => {
          action.payload.forEach((r) => {
            state.byId[r.id] = r;
            if (!state.allIds.includes(r.id)) state.allIds.push(r.id);
          });
        }
      )

      .addCase(fetchAllLeagueData.fulfilled, (state, action) => {
        const teamLineups = action.payload?.teamLineups || [];

        state.byId = {};
        state.allIds = [];

        teamLineups.forEach((d) => {
          state.byId[d.id] = d;
          if (!state.allIds.includes(d.id)) state.allIds.push(d.id);
        });
      });
  },
});

export const selectTeamLineups = (state: RootState) =>
  state.teamLineups.allIds.map((id) => state.teamLineups.byId[id]);

export default teamLineupSlice.reducer;
