import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../..";
import type { SessionSettings } from "../../../types/storeTypes";
import { supabase } from "../../../util/lib/supabase/supabase";
import { type BaseState, initialBaseState } from "../../baseState";
import { fetchAllLeagueData } from "../../fetchAllLeagueDataThunk";

// -- See driversSlice for context on why this is separate -- //

export const fetchSessionsBySessionData = async (
  sessionId: number
): Promise<SessionSettings[]> => {
  const { data, error } = await supabase
    .from("session_settings")
    .select("*")
    .eq("session_id", sessionId);
  if (error) throw new Error(error.message);
  return data as SessionSettings[];
};

export const fetchSessionsBySession = createAsyncThunk(
  "sessionSettings/fetchBySession",
  async (sessionId: number, { rejectWithValue }) => {
    try {
      const data = await fetchSessionsBySessionData(sessionId);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: BaseState<SessionSettings> = initialBaseState();

const sessionSlice = createSlice({
  name: "sessionSettings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchSessionsBySession.fulfilled,
        (state, action: PayloadAction<SessionSettings[]>) => {
          action.payload.forEach((r) => {
            state.byId[r.id] = r;
            if (!state.allIds.includes(r.id)) state.allIds.push(r.id);
          });
        }
      )

      .addCase(fetchAllLeagueData.fulfilled, (state, action) => {
        const sessionSettings = action.payload?.sessionSettings || [];

        state.byId = {};
        state.allIds = [];

        sessionSettings.forEach((d) => {
          state.byId[d.id] = d;
          if (!state.allIds.includes(d.id)) state.allIds.push(d.id);
        });
      });
  },
});

export const selectSessionSettings = (state: RootState) =>
  state.sessionSettings.allIds.map((id) => state.sessionSettings.byId[id]);

export default sessionSlice.reducer;
