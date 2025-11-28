import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../..";
import type { Team } from "../../../types/storeTypes";
import { supabase } from "../../../util/lib/supabase/supabase";
import { type BaseState, initialBaseState } from "../../baseState";
import { fetchAllLeagueData } from "../../fetchAllLeagueDataThunk";

// -- See driversSlice for context on why this is separate -- //

export const fetchTeamsByLeagueData = async (
  leagueId: number
): Promise<Team[]> => {
  const { data, error } = await supabase
    .from("team")
    .select("*")
    .eq("league_id", leagueId);
  if (error) throw new Error(error.message);
  return data as Team[];
};

export const fetchTeamsByLeague = createAsyncThunk(
  "teams/fetchByLeague",
  async (leagueId: number, { rejectWithValue }) => {
    try {
      const data = await fetchTeamsByLeagueData(leagueId);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: BaseState<Team> = initialBaseState();

const teamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchTeamsByLeague.fulfilled,
        (state, action: PayloadAction<Team[]>) => {
          action.payload.forEach((r) => {
            state.byId[r.id] = r;
            if (!state.allIds.includes(r.id)) state.allIds.push(r.id);
          });
        }
      )

      .addCase(fetchAllLeagueData.fulfilled, (state, action) => {
        const teams = action.payload?.teams || [];

        state.byId = {};
        state.allIds = [];

        teams.forEach((d) => {
          state.byId[d.id] = d;
          if (!state.allIds.includes(d.id)) state.allIds.push(d.id);
        });
      });
  },
});

export const selectTeams = (state: RootState) =>
  state.teams.allIds.map((id) => state.teams.byId[id]);

export default teamSlice.reducer;
