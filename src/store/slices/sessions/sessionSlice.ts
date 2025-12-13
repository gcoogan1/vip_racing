import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../..";
import type { Session } from "../../../types/storeTypes";
import { supabase } from "../../../util/lib/supabase/supabase";
import { type BaseState, initialBaseState } from "../../baseState";
import { fetchAllLeagueData } from "../../fetchAllLeagueDataThunk";

// -- See driversSlice for context on why this is separate -- //

export const fetchSessionsBySplitData = async (
  splitId: number
): Promise<Session[]> => {
  const { data, error } = await supabase
    .from("session")
    .select("*")
    .eq("split_id", splitId);
  if (error) throw new Error(error.message);
  return data as Session[];
};

export const fetchSessionsBySplit = createAsyncThunk(
  "sessions/fetchBySplit",
  async (splitId: number, { rejectWithValue }) => {
    try {
      const data = await fetchSessionsBySplitData(splitId);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: BaseState<Session> = initialBaseState();

const sessionSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchSessionsBySplit.fulfilled,
        (state, action: PayloadAction<Session[]>) => {
          action.payload.forEach((r) => {
            state.byId[r.id] = r;
            if (!state.allIds.includes(r.id)) state.allIds.push(r.id);
          });
        }
      )

      .addCase(fetchAllLeagueData.fulfilled, (state, action) => {
        const sessions = action.payload?.sessions || [];

        state.byId = {};
        state.allIds = [];

        sessions.forEach((d) => {
          state.byId[d.id] = d;
          if (!state.allIds.includes(d.id)) state.allIds.push(d.id);
        });
      });
  },
});

export const selectSessions = (state: RootState) =>
  state.sessions.allIds.map((id) => state.sessions.byId[id]);

export default sessionSlice.reducer;
