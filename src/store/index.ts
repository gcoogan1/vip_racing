import { configureStore } from "@reduxjs/toolkit";
import leagueReducer from "./slices/leagues/leaguesSlice";
import roundReducer from "./slices/rounds/roundsSlice";
import raceDayReducer from "./slices/raceDays/raceDaySlice";
import splitReducer from "./slices/splits/splitSlice";
import sessionReducer from "./slices/sessions/sessionSlice";
import sessionSettingsReducer from "./slices/sessionSettings/sessionSettingsSlice";
import sessionDetailsReducer from "./slices/sessionDetails/sessionDetailsSlice";
import driversReducer from "./slices/drivers/driversSlice";
import driversLineupsReducer from "./slices/lineups/driversLineupSlice";
import driverStandingsReducer from "./slices/standings/driverStandingsSlice";
import teamReducer from "./slices/teams/teamSlice";
import teamLineupsReducer from "./slices/lineups/teamLineupSlice";
import teamStandingsReducer from "./slices/standings/teamStandingsSlice";

export const store = configureStore({
  reducer: {
    leagues: leagueReducer,
    rounds: roundReducer,
    raceDays: raceDayReducer,
    splits: splitReducer,
    sessions: sessionReducer,
    sessionSettings: sessionSettingsReducer,
    sessionDetails: sessionDetailsReducer,
    drivers: driversReducer,
    driverLineups: driversLineupsReducer,
    driverStandings: driverStandingsReducer,
    teams: teamReducer,
    teamLineups: teamLineupsReducer,
    teamStandings: teamStandingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
