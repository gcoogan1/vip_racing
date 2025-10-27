import { createAsyncThunk } from '@reduxjs/toolkit';

// 🚨 CRITICAL CHANGE: We must import and call the *underlying asynchronous fetch functions*
// that perform the API call, NOT the Redux Toolkit Thunks.
// These functions must return a Promise of data but NOT dispatch any actions.
// If your existing slices don't expose these, you must refactor them to export the fetcher function.
import { fetchLeagueByIdData } from './features/leagues/leaguesSlice'; 
import { fetchRoundsByLeagueData } from './features/rounds/roundsSlice';
import { fetchRaceDaysByRoundData } from './features/raceDays/raceDaySlice';
import { fetchSplitsByRaceDayData } from './features/splits/splitSlice';
import { fetchSessionsBySplitData } from './features/sessions/sessionSlice';
import { fetchDriversByLeagueData } from './features/drivers/driversSlice';
import { fetchTeamsByLeagueData } from './features/teams/teamSlice';
import { fetchTeamLineupsByLeagueData } from './features/lineups/teamLineupSlice';
import { fetchDriverLineupsBySplitData } from './features/lineups/driversLineupSlice';
import { fetchDriverStandingsBySessionData } from './features/standings/driverStandingsSlice';
import { fetchTeamStandingsBySessionData } from './features/standings/teamStandingsSlice';

export const fetchAllLeagueData = createAsyncThunk(
  "league/fetchAllData",
  // We remove { dispatch } from the payload creator since we no longer dispatch actions mid-fetch.
  async (leagueId: number) => {

    // --- 0️⃣ Fetch the league itself first ---
    // Call the pure data fetcher directly, which returns a Promise<League>.
    const league = await fetchLeagueByIdData(leagueId);

    if (!league) {
        console.warn("League not found", leagueId);
        return;
    }


    // --- 1️⃣ Fetch top-level league data concurrently ---
    const [rounds, drivers, teams, teamLineups] = await Promise.all([
      fetchRoundsByLeagueData(leagueId),
      fetchDriversByLeagueData(leagueId),
      fetchTeamsByLeagueData(leagueId),
      fetchTeamLineupsByLeagueData(leagueId),
    ]);

    if (!rounds?.length) {
      console.warn("No rounds found for league", leagueId);
      return { league, drivers, teams, teamLineups };
    }

    // --- 2️⃣ Fetch race days for all rounds concurrently ---
    const raceDays = (
      await Promise.all(
        rounds.map((r) => fetchRaceDaysByRoundData(r.id))
      )
    ).flat();

    if (!raceDays?.length) {
      console.warn("No race days found for league", leagueId);
      return { league, rounds, drivers, teams, teamLineups };
    }

    // --- 3️⃣ Fetch splits for all race days concurrently ---
    const splits = (
      await Promise.all(
        raceDays.map((rd) => fetchSplitsByRaceDayData(rd.id))
      )
    ).flat();

    if (!splits?.length) {
      console.warn("No splits found for league", leagueId);
      return { league, rounds, raceDays, drivers, teams, teamLineups };
    }

    // --- 4️⃣ Fetch sessions + lineups for all splits concurrently ---
    const [sessions, driverLineups] = await Promise.all([
      Promise.all(
        splits.map((s) => fetchSessionsBySplitData(s.id))
      ).then((res) => res.flat()),

      Promise.all(
        splits.map((s) => fetchDriverLineupsBySplitData(s.id))
      ).then((res) => res.flat()),
    ]);

    // --- 5️⃣ Fetch standings for all sessions concurrently ---
    const [driverStandings, teamStandings] = await Promise.all([
      Promise.all(
        sessions.map((s) =>
          fetchDriverStandingsBySessionData(s.id)
        )
      ).then((res) => res.flat()),

      Promise.all(
        sessions.map((s) =>
          fetchTeamStandingsBySessionData(s.id)
        )
      ).then((res) => res.flat()),
    ]);

    // 🏆 FINAL PAYLOAD: The single result returned by this thunk.
    // This triggers ONE final store update via fetchAllLeagueData.fulfilled.
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
    };
  }
);

