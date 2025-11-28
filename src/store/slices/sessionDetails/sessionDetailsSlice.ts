import { createSlice } from "@reduxjs/toolkit";
import { type BaseState, initialBaseState } from "../../baseState";

// Define the structure for session details
export interface SessionDetails {
  sessionId: number;
  sessionName: string;
  startTime: string;
  type: string;
  track: string;
  car: string;

  raceDayId: number;
  raceDate: string;
  raceDayName: string;
  roundNumber: number;

  splitId: number;
  splitName: string;

  drivers: {
    driverId: number;
    name: string;
    teamName: string;
    crew?: string;
    points?: number;
    time?: string;
  }[];
}


const initialState: BaseState<SessionDetails> = initialBaseState();

// Create the slice for session details
const sessionDetailsSlice = createSlice({
  name: "sessionDetails",
  initialState,
  reducers: {},
});

export default sessionDetailsSlice.reducer;
