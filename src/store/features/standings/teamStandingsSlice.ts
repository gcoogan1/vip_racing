import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../..";
import type { TeamStandings } from "../../../types/storeTypes";
import { supabase } from "../../../util/lib/supabase/supabase";
import { type BaseState, initialBaseState } from "../../baseState";
import { fetchAllLeagueData } from "../../fetchAllLeagueDataThunk";

// -- See driversSlice for context on why this is separate -- //

export const fetchTeamStandingsBySessionData = async (
  sessionId: number
): Promise<TeamStandings[]> => {
  const { data, error } = await supabase
    .from("team_standings")
    .select("*")
    .eq("session_id", sessionId);
  if (error) throw new Error(error.message);
  return data as TeamStandings[];
};

export const fetchTeamStandingsBySession = createAsyncThunk(
  "teamStandings/fetchBySession",
  async (sessionId: number, { rejectWithValue }) => {
    try {
      const data = await fetchTeamStandingsBySessionData(sessionId);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: BaseState<TeamStandings> = initialBaseState();

const teamStandingsSlice = createSlice({
  name: "teamStandings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchTeamStandingsBySession.fulfilled,
        (state, action: PayloadAction<TeamStandings[]>) => {
          action.payload.forEach((r) => {
            state.byId[r.id] = r;
            if (!state.allIds.includes(r.id)) state.allIds.push(r.id);
          });
        }
      )

      .addCase(fetchAllLeagueData.fulfilled, (state, action) => {
        const teamStandings = action.payload?.teamStandings || [];

        state.byId = {};
        state.allIds = [];

        teamStandings.forEach((d) => {
          state.byId[d.id] = d;
          if (!state.allIds.includes(d.id)) state.allIds.push(d.id);
        });
      });
  },
});

export const selectTeamStandings = (state: RootState) =>
  state.teamStandings.allIds.map((id) => state.teamStandings.byId[id]);

export default teamStandingsSlice.reducer;
