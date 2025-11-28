import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "..";


// ---------------------------------------------------------
// RACE DAY SELECTORS
// -- race days --
// ---------------------------------------------------------

// Race days by ID
export const selectRaceDaysById = createSelector(
  [(state: RootState) => state.raceDays.byId],
  (byId) => byId
);

// Race days by rounds (with round info, sessions, and session settings)
export const selectRaceDaysGroupedByRound = createSelector(
  [
    (state: RootState) => state.raceDays.byId,
    (state: RootState) => state.raceDays.allIds,
    (state: RootState) => state.rounds.byId,
    (state: RootState) => state.rounds.allIds,
    (state: RootState) => state.sessions.byId,
    (state: RootState) => state.sessions.allIds,
    (state: RootState) => state.sessionSettings.byId,
    (state: RootState) => state.sessionSettings.allIds,

  ],
  (raceDaysById, raceDaysAllIds, roundsById, roundsAllIds, sessionsById, sessionsAllIds, sessionSettingsById, sessionSettingsAllIds) => {
    return roundsAllIds.map((roundId) => {
      const round = roundsById[roundId];

      const raceDayIds = raceDaysAllIds.filter(
        (rdId) => raceDaysById[rdId].round_id === roundId
      );

      const raceDays = raceDayIds.map((rdId) => {
        const raceDay = raceDaysById[rdId];
        
        const sessions = sessionsAllIds
          .map((sId) => sessionsById[sId])
          .filter((s) => s.race_day_id === raceDay.id);
        
        const sessionSettings = sessionSettingsAllIds
          .map((ssId) => sessionSettingsById[ssId])
          .filter((ss) => sessions.some((s) => s.id === ss.session_id));

        return {
          ...raceDay,
          sessions,
          sessionSettings
        };
      });

      return {
        ...round,
        raceDays,
      };
    });
  }
);