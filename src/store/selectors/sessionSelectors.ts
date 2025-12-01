import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import type { SessionSettings } from "../../types/storeTypes";
import { selectStandingsForParticipant } from "./standingSelectors";
import { selectRaceDaysById } from "./raceDaySelectors";
import { formatRaceDate } from "../../util/helper/helperFunctions";
import { selectRoundsById } from "./roundSelectors";

// ---------------------------------------------------------
// SESSION SELECTORS
// -- sessions, session settings, session standings --
// ---------------------------------------------------------

// Sessions by ID
export const selectSessionsById = createSelector(
  [(state: RootState) => state.sessions.byId],
  (byId) => byId
);

// All session standings with driver and team names included
export const selectAllSessionStandings = createSelector(
  [
    (state: RootState) => state.driverStandings.byId,
    (state: RootState) => state.driverStandings.allIds,
    (state: RootState) => state.drivers.byId,
    (state: RootState) => state.teams.byId,
  ],
  (standingsById, ids, driversById, teamsById) =>
    ids.map((id) => {
      const s = standingsById[id];
      const driver = driversById[s.driver_id];
      const team = driver ? teamsById[driver.team_id] : null;

      return {
        ...s,
        driverName: driver?.name ?? "Unknown",
        driverCrew: driver?.crew ?? "",
        teamName: team?.team_name ?? "Unknown",
      };
    })
);

// Standings for a single session by ID (with sorting by points descending)
export const selectSessionStandingsById = (sessionId: number) =>
  createSelector(selectAllSessionStandings, (all) =>
    all
      .filter((s) => s.session_id === sessionId)
      .sort((a, b) => (b.points || 0) - (a.points || 0))
  );

// Session settings by session_id
export const selectSessionSettingsBySessionId = createSelector(
  [(state: RootState) => state.sessionSettings.byId],
  (settingsById) => {
    const map: Record<number, SessionSettings> = {};
    Object.values(settingsById).forEach((s) => {
      map[s.session_id] = s;
    });
    return map;
  }
);

// Full Session details by session ID (including drivers, race day, round, etc.)
export const selectSessionDetailsById = (sessionId: number) =>
  createSelector(
    [
      (state: RootState) => state.sessions.byId,
      (state: RootState) => state.sessionSettings.byId,
      (state: RootState) => state.splits.byId,
      (state: RootState) => state.raceDays.byId,
      (state: RootState) => state.rounds.byId,
      (state: RootState) => state.driverStandings.byId,
      (state: RootState) => state.drivers.byId,
      (state: RootState) => state.teams.byId,
    ],
    (
      sessionsById,
      settingsById,
      splitsById,
      raceDaysById,
      roundsById,
      driverStandingsById,
      driversById,
      teamsById
    ) => {
      const session = sessionsById[sessionId];
      if (!session) return null;

      const setting = settingsById[sessionId];
      const split = splitsById[session.split_id];
      const raceDay = split ? raceDaysById[split.race_day_id] : null;
      const round = raceDay ? roundsById[raceDay.round_id] : null;

      const drivers = Object.values(driverStandingsById)
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
        });

      return {
        sessionId: session.id,
        sessionName: session.session_name,
        startTime: session.start_time,
        type: session.type,
        car: setting?.car ?? "",
        track: setting?.track ?? "",

        splitId: split?.id ?? 0,
        splitName: split?.split_name ?? "",

        raceDayId: raceDay?.id ?? 0,
        raceDate: raceDay?.race_date ?? "",
        raceDayName: raceDay?.race_day_name ?? "",

        roundNumber: round?.round_num ?? 0,

        drivers,
      };
    }
  );

// Selector that gets all session results for a participant (driver OR team) with enriched session info
export const selectParticipantSessionResults = (
  id: number,
  type: "driver" | "team"
) =>
  createSelector(
    [
      selectStandingsForParticipant(id, type),
      selectSessionsById,
      selectSessionSettingsBySessionId,
      selectRaceDaysById,
      selectRoundsById,
    ],
    (
      standings,
      sessionsById,
      settingsBySessionId,
      raceDaysById,
      roundsById
    ) => {
      return standings
        .map((entry) => {
          console.log("Processing standing entry:", entry);
          const session = sessionsById[entry.session_id];
          if (!session) return null;

          const setting = settingsBySessionId[entry.session_id];
          if (!setting) return null;

          const raceDay = raceDaysById[session.race_day_id];
          if (!raceDay) return null;

          const round = roundsById[raceDay.round_id];
          if (!round) return null;

          return {
            sessionId: session.id,
            sessionName: session.session_name,
            roundNum: round.round_num,
            roundName: round.round_name,
            raceDate: formatRaceDate(raceDay.race_date, true),
            points: entry.points,
            raceTrack: setting.track,
            raceDayId: raceDay.id,
          };
        })
        .filter(Boolean);
    }
  );

