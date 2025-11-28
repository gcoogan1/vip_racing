import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../..";
import type { Round } from "../../../types/storeTypes";
import { supabase } from "../../../util/lib/supabase/supabase";
import { type BaseState, initialBaseState } from "../../baseState";
import { fetchAllLeagueData } from "../../fetchAllLeagueDataThunk";

// -- See driversSlice for context on why this is separate -- //

export const fetchRoundsByLeagueData = async (
  leagueId: number
): Promise<Round[]> => {
  const { data, error } = await supabase
    .from("round")
    .select("*")
    .eq("league_id", leagueId);
  if (error) throw new Error(error.message);
  return data as Round[];
};

export const fetchRoundsByLeague = createAsyncThunk(
  "rounds/fetchByLeague",
  async (leagueId: number, { rejectWithValue }) => {
    try {
      const data = await fetchRoundsByLeagueData(leagueId);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: BaseState<Round> = initialBaseState();

const roundSlice = createSlice({
  name: "rounds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchRoundsByLeague.fulfilled,
        (state, action: PayloadAction<Round[]>) => {
          action.payload.forEach((r) => {
            state.byId[r.id] = r;
            if (!state.allIds.includes(r.id)) state.allIds.push(r.id);
          });
        }
      )
      .addCase(fetchAllLeagueData.fulfilled, (state, action) => {
        const rounds = action.payload?.rounds || [];

        state.byId = {};
        state.allIds = [];

        rounds.forEach((d) => {
          state.byId[d.id] = d;
          if (!state.allIds.includes(d.id)) state.allIds.push(d.id);
        });
      });
  },
});

export const selectRounds = (state: RootState) =>
  state.rounds.allIds.map((id) => state.rounds.byId[id]);

export default roundSlice.reducer;
