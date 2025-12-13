import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { selectTeamDriversMap } from "./driverSelectors";

// ---------------------------------------------------------
// TEAM SELECTORS
// -- teams, team lineups --
// ---------------------------------------------------------

// All team info with total points
export const selectAllTeamInfo = createSelector(
  [
    (state: RootState) => state.teams.byId,
    (state: RootState) => state.teamStandings.byId,
    (state: RootState) => state.teamStandings.allIds,
  ],
  (teamsById, standingsById, standingsAllIds) => {
    return Object.values(teamsById).map((team) => {
      const totalPoints = standingsAllIds
        .map((id) => standingsById[id])
        .filter((s) => s.team_id === team.id)
        .reduce((sum, s) => sum + (s.points || 0), 0);

      return {
        ...team,
        totalPoints,
      };
    });
  }
);

// Team lineups with team names, drivers, and team images (Team Cards)
export const selectDetailedTeamLineups = createSelector(
  [
    (state: RootState) => state.teamLineups.byId,
    (state: RootState) => state.teamLineups.allIds,
    (state: RootState) => state.teams.byId,
    selectTeamDriversMap,
  ],
  (teamLineupsById, ids, teamsById, teamDriversMap) => {
    return ids.map((id) => {
      const tl = teamLineupsById[id];
      const team = teamsById[tl.team_id];

      return {
        id: tl.id,
        teamName: team?.team_name ?? "Unknown",
        teamImage: team?.team_logo ?? "",
        teamNumber: tl.lineup_num,
        drivers: (teamDriversMap[team.id] || []).map((d) => d.name),
      };
    });
  }
);
