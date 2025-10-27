import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../..";
import type { DriverLineup } from "../../../types/storeTypes";
import { supabase } from "../../../util/lib/supabase/supabase";
import { type BaseState, initialBaseState } from "../../baseState";
import { fetchAllLeagueData } from "../../fetchAllLeagueDataThunk";

// -- See driversSlice for context on why this is separate -- //

export const fetchDriverLineupsBySplitData = async (
  splitId: number
): Promise<DriverLineup[]> => {
  const { data, error } = await supabase
    .from("driver_lineup")
    .select("*")
    .eq("split_id", splitId);
  if (error) throw new Error(error.message);
  return data as DriverLineup[];
};

export const fetchDriverLineupsBySplit = createAsyncThunk(
  "driverLineups/fetchBySplit",
  async (splitId: number, { rejectWithValue }) => {
    try {
      const data = await fetchDriverLineupsBySplitData(splitId);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: BaseState<DriverLineup> = initialBaseState();

const driversLineupSlice = createSlice({
  name: "driverLineups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchDriverLineupsBySplit.fulfilled,
        (state, action: PayloadAction<DriverLineup[]>) => {
          action.payload.forEach((r) => {
            state.byId[r.id] = r;
            if (!state.allIds.includes(r.id)) state.allIds.push(r.id);
          });
        }
      )

      .addCase(fetchAllLeagueData.fulfilled, (state, action) => {
        const driverLineups = action.payload?.driverLineups || [];

        state.byId = {};
        state.allIds = [];

        driverLineups.forEach((d) => {
          state.byId[d.id] = d;
          if (!state.allIds.includes(d.id)) state.allIds.push(d.id);
        });
      });
  },
});

export const selectDriverLineups = (state: RootState) =>
  state.driverLineups.allIds.map((id) => state.driverLineups.byId[id]);

export default driversLineupSlice.reducer;
