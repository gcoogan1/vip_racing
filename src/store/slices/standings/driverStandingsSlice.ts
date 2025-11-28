import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../..";
import type { DriverStandings } from "../../../types/storeTypes";
import { supabase } from "../../../util/lib/supabase/supabase";
import { type BaseState, initialBaseState } from "../../baseState";
import { fetchAllLeagueData } from "../../fetchAllLeagueDataThunk";

// -- See driversSlice for context on why this is separate -- //

export const fetchDriverStandingsBySessionData = async (
  sessionId: number
): Promise<DriverStandings[]> => {
  const { data, error } = await supabase
    .from("driver_standings")
    .select("*")
    .eq("session_id", sessionId);
  if (error) throw new Error(error.message);
  return data as DriverStandings[];
};

export const fetchDriverStandingsBySession = createAsyncThunk(
  "driverStandings/fetchBySession",
  async (sessionId: number, { rejectWithValue }) => {
    try {
      const data = await fetchDriverStandingsBySessionData(sessionId);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: BaseState<DriverStandings> = initialBaseState();

const driverStandingsSlice = createSlice({
  name: "driverStandings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchDriverStandingsBySession.fulfilled,
        (state, action: PayloadAction<DriverStandings[]>) => {
          action.payload.forEach((r) => {
            state.byId[r.id] = r;
            if (!state.allIds.includes(r.id)) state.allIds.push(r.id);
          });
        }
      )

      .addCase(fetchAllLeagueData.fulfilled, (state, action) => {
        const driverStandings = action.payload?.driverStandings || [];

        state.byId = {};
        state.allIds = [];

        driverStandings.forEach((d) => {
          state.byId[d.id] = d;
          if (!state.allIds.includes(d.id)) state.allIds.push(d.id);
        });
      });
  },
});

export const selectDriverStandings = (state: RootState) =>
  state.driverStandings.allIds.map((id) => state.driverStandings.byId[id]);

export default driverStandingsSlice.reducer;
