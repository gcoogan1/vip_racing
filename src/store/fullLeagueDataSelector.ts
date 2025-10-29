import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export const selectFullLeagueData = (leagueId: number) =>
  createSelector(
    (state: RootState) => state,
    (state) => {
      const league = state.leagues.data.find((l) => l.id === leagueId);
      if (!league) return undefined;

      const rounds = state.rounds.allIds.map((id) => state.rounds.byId[id])
        .filter((r) => r.league_id === leagueId);

      const raceDays = state.raceDays.allIds.map((id) => state.raceDays.byId[id])
        .filter((rd) => rounds.some((r) => r.id === rd.round_id));

      const splits = state.splits.allIds.map((id) => state.splits.byId[id])
        .filter((s) => raceDays.some((rd) => rd.id === s.race_day_id));

      const sessions = state.sessions.allIds.map((id) => state.sessions.byId[id])
        .filter((ss) => splits.some((s) => s.id === ss.split_id));

      const drivers = state.drivers.allIds.map((id) => state.drivers.byId[id])
        .filter((d) => d.league_id === leagueId);

      const teams = state.teams.allIds.map((id) => state.teams.byId[id])
        .filter((t) => t.league_id === leagueId);

      const teamLineups = state.teamLineups.allIds.map((id) => state.teamLineups.byId[id])
        .filter((tl) => tl.league_id === leagueId);

      const driverLineups = state.driverLineups.allIds.map((id) => state.driverLineups.byId[id])
        .filter((dl) => splits.some((s) => s.id === dl.split_id));

      const driverStandings = state.driverStandings.allIds.map((id) => state.driverStandings.byId[id])
        .filter((ds) => sessions.some((s) => s.id === ds.session_id));

      const teamStandings = state.teamStandings.allIds.map((id) => state.teamStandings.byId[id])
        .filter((ts) => sessions.some((s) => s.id === ts.session_id));

      const sessionSettings = state.sessionSettings.allIds.map((id) => state.sessionSettings.byId[id])
        .filter((ss) => sessions.some((s) => s.id === ss.session_id));

      return {
        league,
        rounds,
        raceDays,
        splits,
        sessions,
        drivers,
        teams,
        teamLineups,
        driverLineups,
        driverStandings,
        teamStandings,
        sessionSettings,
      };
    }
  );
