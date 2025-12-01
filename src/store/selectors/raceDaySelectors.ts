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


// Full race day details with splits, sessions, settings, drivers, teams, etc.
export const selectRaceDayWithAllDetails = (raceDayId: number) =>
  createSelector(
    [
      (state: RootState) => state.raceDays.byId,
      (state: RootState) => state.rounds.byId,
      (state: RootState) => state.splits.byId,
      (state: RootState) => state.sessions.byId,
      (state: RootState) => state.sessionSettings.byId,
      (state: RootState) => state.driverStandings.byId,
      (state: RootState) => state.drivers.byId,
      (state: RootState) => state.teams.byId,
    ],
    (
      raceDaysById,
      roundsById,
      splitsById,
      sessionsById,
      settingsById,
      driverStandingsById,
      driversById,
      teamsById
    ) => {
      const raceDay = raceDaysById[raceDayId];
      if (!raceDay) return null;

      const round = roundsById[raceDay.round_id];

      // ------------------------------------------
      // 1️⃣ Get all splits for this race day
      // ------------------------------------------
      const splits = Object.values(splitsById).filter(
        (s) => s.race_day_id === raceDayId
      );

      // ------------------------------------------
      // 2️⃣ For each split: get session + drivers
      // ------------------------------------------
      const splitsWithDetails = splits.map((split) => {
        const session = Object.values(sessionsById).find(
          (sess) => sess.split_id === split.id
        );

        const sessionSetting = session ? settingsById[session.id] : null;

        // Drivers belonging to this session
        const drivers =
          session
            ? Object.values(driverStandingsById)
                .filter((ds) => ds.session_id === session.id)
                .map((ds) => {
                  const driver = driversById[ds.driver_id];
                  const team = driver ? teamsById[driver.team_id] : null;

                  return {
                    driverId: driver?.id ?? 0,
                    name: driver?.name ?? "Unknown",
                    teamName: team?.team_name ?? "Unknown",
                    crew: driver?.crew ?? "",
                    points: ds.points,
                    time: ds.time,
                  };
                })
            : [];

        return {
          splitId: split.id,
          splitName: split.split_name,

          session: session
            ? {
                sessionId: session.id,
                name: session.session_name,
                startTime: session.start_time,
                type: session.type,
                track: sessionSetting?.track ?? "",
                car: sessionSetting?.car ?? "",
              }
            : null,

          drivers,
        };
      });

      // ------------------------------------------
      // 3️⃣ Return 100% fully populated race day
      // ------------------------------------------
      return {
        raceDayId: raceDay.id,
        raceDayName: raceDay.race_day_name,
        raceDate: raceDay.race_date,

        roundId: round?.id ?? 0,
        roundNumber: round?.round_num ?? 0,
        roundName: round?.round_name ?? "",

        splits: splitsWithDetails,
      };
    }
  );
