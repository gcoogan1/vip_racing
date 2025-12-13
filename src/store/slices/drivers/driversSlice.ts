// store/roundSlice.ts
import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../..";
import type { Driver } from "../../../types/storeTypes";
import { supabase } from "../../../util/lib/supabase/supabase";
import { type BaseState, initialBaseState } from "../../baseState";
import { fetchAllLeagueData } from "../../fetchAllLeagueDataThunk";

//  -- Fetch drivers by league from Supabase for featchAllThunk -- //
// INFO:
// This is used to prevent re-requesting driver data when fetching all league data, as it can be a large dataset. Instead, we can fetch drivers separately when needed.
// This allows for more efficient data fetching and reduces unnecessary API calls when we only need driver data for a specific league.
export const fetchDriversByLeagueData = async (
  leagueId: number
): Promise<Driver[]> => {
  const { data, error } = await supabase
    .from("driver")
    .select("*")
    .eq("league_id", leagueId);
  if (error) throw new Error(error.message);
  return data as Driver[];
};

//  -- Async thunk to fetch drivers by league -- //
// INFO:
// This is used when you want to fetch and commit ONLY drivers immediately, without going through the entire fetchAllLeagueData process.
// It can be used in components that only need driver data or when you want to refresh driver data independently.
export const fetchDriversByLeague = createAsyncThunk(
  "drivers/fetchByLeague",
  async (leagueId: number, { rejectWithValue }) => {
    try {
      const data = await fetchDriversByLeagueData(leagueId);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: BaseState<Driver> = initialBaseState();

const driverSlice = createSlice({
  name: "drivers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchDriversByLeague.fulfilled,
        (state, action: PayloadAction<Driver[]>) => {
          action.payload.forEach((r) => {
            state.byId[r.id] = r;
            if (!state.allIds.includes(r.id)) state.allIds.push(r.id);
          });
        }
      )

      // INFO:
      // Case for fetching all league data, which includes drivers. 
      // This ensures that when we fetch all league data, we also update the drivers in the state accordingly.
      .addCase(fetchAllLeagueData.fulfilled, (state, action) => {
        const drivers = action.payload?.drivers || [];

        // Clear state
        state.byId = {};
        state.allIds = [];

        // Save the new data
        drivers.forEach((d) => {
          state.byId[d.id] = d;
          if (!state.allIds.includes(d.id)) state.allIds.push(d.id);
        });
      });
  },
});

export const selectDrivers = (state: RootState) =>
  state.drivers.allIds.map((id) => state.drivers.byId[id]);

export default driverSlice.reducer;
