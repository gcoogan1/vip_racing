import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "..";

// ---------------------------------------------------------
// ROUND SELECTORS
// -- rounds --
// ---------------------------------------------------------

// Rounds by ID
export const selectRoundsById = createSelector(
  [(state: RootState) => state.rounds.byId],
  (byId) => byId
);