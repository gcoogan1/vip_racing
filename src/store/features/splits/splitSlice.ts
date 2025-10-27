import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../..";
import type { Split } from "../../../types/storeTypes";
import { supabase } from "../../../util/lib/supabase/supabase";
import { type BaseState, initialBaseState } from "../../baseState";
import { fetchAllLeagueData } from "../../fetchAllLeagueDataThunk";

// -- See driversSlice for context on why this is separate -- //

export const fetchSplitsByRaceDayData = async (
  raceDayId: number
): Promise<Split[]> => {
  const { data, error } = await supabase
    .from("split")
    .select("*")
    .eq("race_day_id", raceDayId);
  if (error) throw new Error(error.message);
  return data as Split[];
};

export const fetchSplitsByRaceDay = createAsyncThunk(
  "split/fetchByRaceDay",
  async (raceDayId: number, { rejectWithValue }) => {
    try {
      const data = await fetchSplitsByRaceDayData(raceDayId);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: BaseState<Split> = initialBaseState();

const splitSlice = createSlice({
  name: "splits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchSplitsByRaceDay.fulfilled,
        (state, action: PayloadAction<Split[]>) => {
          action.payload.forEach((r) => {
            state.byId[r.id] = r;
            if (!state.allIds.includes(r.id)) state.allIds.push(r.id);
          });
        }
      )

      .addCase(fetchAllLeagueData.fulfilled, (state, action) => {
        const splits = action.payload?.splits || [];

        state.byId = {};
        state.allIds = [];

        splits.forEach((d) => {
          state.byId[d.id] = d;
          if (!state.allIds.includes(d.id)) state.allIds.push(d.id);
        });
      });
  },
});

export const selectSplits = (state: RootState) =>
  state.splits.allIds.map((id) => state.splits.byId[id]);

export default splitSlice.reducer;
