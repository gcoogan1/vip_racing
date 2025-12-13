import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "..";

// ---------------------------------------------------------
// STANDING SELECTORS
// -- standings --
// ---------------------------------------------------------

// Standings for a specific participant (driver or team)
export const selectStandingsForParticipant = (
  id: number,
  type: "driver" | "team"
) =>
  createSelector(
    [
      (state: RootState) => state.driverStandings.byId,
      (state: RootState) => state.driverStandings.allIds,
      (state: RootState) => state.teamStandings.byId,
      (state: RootState) => state.teamStandings.allIds,
    ],
    (driverById, driverIds, teamById, teamIds) => {
      if (type === "driver") {
        return driverIds
          .map((sid) => driverById[sid])
          .filter((s) => s.driver_id === id);
      }

      return teamIds
        .map((sid) => teamById[sid])
        .filter((s) => s.team_id === id);
    }
  );