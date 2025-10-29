import { configureStore } from "@reduxjs/toolkit";
import leagueReducer from "./features/leagues/leaguesSlice";
import roundReducer from "./features/rounds/roundsSlice";
import raceDayReducer from "./features/raceDays/raceDaySlice";
import splitReducer from "./features/splits/splitSlice";
import sessionReducer from "./features/sessions/sessionSlice";
import sessionSettingsReducer from "./features/sessionSettings/sessionSettingsSlice";
import driversReducer from "./features/drivers/driversSlice";
import driversLineupsReducer from "./features/lineups/driversLineupSlice";
import driverStandingsReducer from "./features/standings/driverStandingsSlice";
import teamReducer from "./features/teams/teamSlice";
import teamLineupsReducer from "./features/lineups/teamLineupSlice";
import teamStandingsReducer from "./features/standings/teamStandingsSlice";

export const store = configureStore({
  reducer: {
    leagues: leagueReducer,
    rounds: roundReducer,
    raceDays: raceDayReducer,
    splits: splitReducer,
    sessions: sessionReducer,
    sessionSettings: sessionSettingsReducer,
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
