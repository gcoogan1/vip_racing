import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "..";
import type { DriverLineup, Session, Split } from "../../types/storeTypes";
import { toLocalTime } from "../../util/helper/helperFunctions";

// ---------------------------------------------------------
// COMBINED SELECTORS
// -- combined selector and helper selectors --
// ---------------------------------------------------------
// ----------------------------------------------------------
// -- Combined Selector --
// - race day lineup -
// ----------------------------------------------------------
// -- Helper Selectors --
//  - splits, sessions, driver info, driver lineups -
// ---------------------------------------------------------


// ------------------------------------------------------------------- //
//  -- Helper Selectors (can be called on their own) -- //
// ------------------------------------------------------------------- //

// SPLITS by race day ID
export const selectSplitsByRaceDayId = createSelector(
  [(state: RootState) => state.splits.byId],
  (splitsById) => {
    const map: Record<number, Split[]> = {};
    Object.values(splitsById).forEach((split) => {
      if (!map[split.race_day_id]) map[split.race_day_id] = [];
      map[split.race_day_id].push(split);
    });
    return map;
  }
);

// SESSIONS by split ID
export const selectSessionBySplitId = createSelector(
  [(state: RootState) => state.sessions.byId],
  (sessionsById) => {
    const map: Record<number, Session[]> = {};
    Object.values(sessionsById).forEach((session) => {
      if (!map[session.split_id]) map[session.split_id] = [];
      map[session.split_id].push(session);
    });
    return map;
  }
);

// SESSIONS SETTINGS grouped by session ID
export const selectSessionSettingsBySessionId = createSelector(
  [(state: RootState) => state.sessionSettings.byId],
  (settingsById) => settingsById
);

// All DRIVER INFO with team names and total points
export const selectAllDriverInfo = createSelector(
  [
    (state: RootState) => state.drivers.byId,
    (state: RootState) => state.teams.byId,
    (state: RootState) => state.driverStandings.byId,
    (state: RootState) => state.driverStandings.allIds,
  ],
  (driversById, teamsById, standingsById, standingsAllIds) => {
    return Object.values(driversById).map((driver) => {
      const team = teamsById[driver.team_id];

      // Sum points across all sessions for this driver
      const totalPoints = standingsAllIds
        .map((id) => standingsById[id])
        .filter((s) => s.driver_id === driver.id)
        .reduce((sum, s) => sum + (s.points ?? 0), 0);

      return {
        ...driver,
        teamName: team?.team_name ?? "Unknown",
        totalPoints,
      };
    });
  }
);

// DRIVER INFO by driver ID (with team names and total points)
  export const selectDriverInfo = (driverId: number) =>
  createSelector(selectAllDriverInfo, (drivers) =>
    drivers.find((d) => d.id === driverId) ?? null
  );


// DRIVER LINEUPS by split ID
export const selectDriverLineupsBySplitId = createSelector(
  [(state: RootState) => state.driverLineups.byId],
  (driverLineupsById) => {
    const map: Record<number, DriverLineup[]> = {};
    Object.values(driverLineupsById).forEach((dl) => {
      if (!map[dl.split_id]) map[dl.split_id] = [];
      map[dl.split_id].push(dl);
    });
    return map;
  }
);



// ------------------------------------------------------------------- //
//  -- Main Selector that combines multiple selectors (from above) -- //
// ------------------------------------------------------------------- //

// DRIVER RACE DAY LINEUP with splits, sessions, and driver lineups


export const selectRaceDayLineupDetails = createSelector(
  [
    (state: RootState) => state.raceDays.byId,
    (state: RootState) => state.raceDays.allIds,

    selectSplitsByRaceDayId,
    selectSessionBySplitId,
    selectSessionSettingsBySessionId,
    selectDriverLineupsBySplitId,
    selectAllDriverInfo,
  ],
  (
    raceDaysById,
    raceDayIds,
    splitsByRaceDay,
    sessionsBySplitId,
    settingsBySessionId,
    lineupsBySplitId,
    allDriverInfo
  ) => {
    return raceDayIds.map((raceDayId) => {
      const raceDay = raceDaysById[raceDayId];
      const splits = splitsByRaceDay[raceDay.id] || [];

      return {
        ...raceDay,
        splits: splits.map((split) => {
          const sessions = sessionsBySplitId[split.id] || [];
          const driverLineups = lineupsBySplitId[split.id] || [];

          return {
            ...split,
            sessions: sessions.map((session) => ({
              ...session,
              localTime: session.start_time
                ? toLocalTime(session.start_time)
                : undefined,
              settings: settingsBySessionId[session.id] ?? null,
            })),

            driverLineups: driverLineups.map((dl) => {
              const d = allDriverInfo.find(
                (driver) => driver.id === dl.driver_id
              );

              return {
                id: dl.id,
                lineupNum: dl.lineup_num,
                name: d?.name,
                team: d?.teamName,
                crew: d?.crew,
                psn: d?.psn_id,
                socials: {
                  youtube: d?.youtube_link,
                  youtubeUsername: d?.youtube_username,
                  twitch: d?.twitch_link,
                  twitchUsername: d?.twitch_username,
                },
              };
            }),
          };
        }),
      };
    });
  }
);