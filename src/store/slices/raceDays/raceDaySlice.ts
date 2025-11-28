import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../..";
import type { RaceDay } from "../../../types/storeTypes";
import { supabase } from "../../../util/lib/supabase/supabase";
import { type BaseState, initialBaseState } from "../../baseState";
import { fetchAllLeagueData } from "../../fetchAllLeagueDataThunk";

// -- See driversSlice for context on why this is separate -- //

export const fetchRaceDaysByRoundData = async (
  roundId: number
): Promise<RaceDay[]> => {
  const { data, error } = await supabase
    .from("race_day")
    .select("*")
    .eq("round_id", roundId);
  if (error) throw new Error(error.message);
  return data as RaceDay[];
};

export const fetchRaceDaysByRound = createAsyncThunk(
  "raceDays/fetchByRound",
  async (roundId: number, { rejectWithValue }) => {
    try {
      const data = await fetchRaceDaysByRoundData(roundId);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: BaseState<RaceDay> = initialBaseState();

const raceDaySlice = createSlice({
  name: "raceDays",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchRaceDaysByRound.fulfilled,
        (state, action: PayloadAction<RaceDay[]>) => {
          action.payload.forEach((r) => {
            state.byId[r.id] = r;
            if (!state.allIds.includes(r.id)) state.allIds.push(r.id);
          });
        }
      )

      .addCase(fetchAllLeagueData.fulfilled, (state, action) => {
        const raceDays = action.payload?.raceDays || [];

        state.byId = {};
        state.allIds = [];

        raceDays.forEach((d) => {
          state.byId[d.id] = d;
          if (!state.allIds.includes(d.id)) state.allIds.push(d.id);
        });
      });
  },
});

export const selectRaceDays = (state: RootState) =>
  state.raceDays.allIds.map((id) => state.raceDays.byId[id]);

export default raceDaySlice.reducer;
