import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "..";
import type { Driver } from "../../types/storeTypes";


// ---------------------------------------------------------
// DRIVER SELECTORS
// -- drivers --
// ---------------------------------------------------------


// Selector to get drivers grouped by team ID
export const selectTeamDriversMap = createSelector(
  [(state: RootState) => state.drivers.byId],
  (driversById) => {
    const map: Record<number, Driver[]> = {};
    Object.values(driversById).forEach((driver) => {
      if (!map[driver.team_id]) map[driver.team_id] = [];
      map[driver.team_id].push(driver);
    });
    return map;
  }
);