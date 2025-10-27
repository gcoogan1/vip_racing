import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../..';
import { supabase } from '../../../util/lib/supabase/supabase';
import { fetchAllLeagueData } from '../../fetchAllLeagueDataThunk';

// League data structure based on the database schema for the 'league' table. This should match the fields returned by the Supabase query.

// Note: this slice is different than the other slices in that it does not use ids for normalization. 
// Instead, it stores the full league objects directly in the state. 
// This is because we often need to access the full league data for display purposes, and the number of leagues is expected to be small (e.g., 1-10). 
// If we had a large number of leagues, we might consider normalizing the data with ids and separate entities for related data (like rounds, drivers, etc.). 
// For now, this approach keeps things simple and straightforward.

export interface League {
  id: number;
  created_at: string;
  season: string | null;
  start_date: string | null;
  end_date: string | null;
  name: string | null;
  description: string | null;
}

interface LeaguesState {
  data: League[];
  loading: boolean;
  error: string | null;
  selectedLeagueId: number | null;
}

const initialState: LeaguesState = {
  data: [],
  loading: false,
  error: null,
  selectedLeagueId: null,
};

// ✅ Fetch a single league by ID for fetchAllLeagueData. 
export const fetchLeagueByIdData = async (id: number) => {
  const { data, error } = await supabase.from('league').select('*').eq('id', id).single();
  if (error) throw new Error(error.message); 
  return data as League;
};

// ✅ Fetch all leagues
export const fetchLeagues = createAsyncThunk('leagues/fetchAll', async (_, { rejectWithValue }) => {
  const { data, error } = await supabase.from('league').select('*').order('id', { ascending: true });
  if (error) return rejectWithValue(error.message);
  return data as League[];
});

// ✅ Optionally fetch a single league (for details)
export const fetchLeagueById = createAsyncThunk(
  'leagues/fetchById',
  async (id: number, { rejectWithValue }) => {
    // Note: We should ideally call fetchLeagueByIdData here, but keeping the original structure for compatibility
    const { data, error } = await supabase.from('league').select('*').eq('id', id).single();
    if (error) return rejectWithValue(error.message);
    return data as League;
  }
);

const leaguesSlice = createSlice({
  name: 'leagues',
  initialState,
  reducers: {
    // Select a league manually (to trigger dependent fetches)
    setSelectedLeagueId: (state, action: PayloadAction<number | null>) => {
      state.selectedLeagueId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all leagues
      .addCase(fetchLeagues.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeagues.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLeagues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch single league
      .addCase(fetchLeagueById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeagueById.fulfilled, (state, action) => {
        state.loading = false;
        const league = action.payload;
        const existing = state.data.findIndex((l) => l.id === league.id);
        if (existing >= 0) {
          state.data[existing] = league;
        } else {
          state.data.push(league);
        }
      })
      .addCase(fetchLeagueById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Handle the successful completion of the batch fetch
      .addCase(fetchAllLeagueData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        const league = action.payload?.league;

        if (league) {
          // 1. Save the league data
          const existing = state.data.findIndex((l) => l.id === league.id);
          if (existing >= 0) {
            state.data[existing] = league;
          } else {
            state.data.push(league);
          }

          // 2. Mark this league as the selected one (since we just loaded all its data)
          state.selectedLeagueId = league.id;
        }
      })

      // Handle the pending state of the batch fetch
      .addCase(fetchAllLeagueData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      
      // Handle the rejected state of the batch fetch
      .addCase(fetchAllLeagueData.rejected, (state, action) => {
        state.loading = false;
        // The error object for a thunk rejected with a value is often action.payload
        state.error = (action.payload as string) || action.error.message || 'Failed to load all league data.';
        // Optional: clear the selected ID if the load failed.
        // state.selectedLeagueId = null; 
      });
  },
});

export const { setSelectedLeagueId } = leaguesSlice.actions;

export const selectLeagues = (state: RootState) => state.leagues.data;
export const selectLeaguesLoading = (state: RootState) => state.leagues.loading;
export const selectSelectedLeagueId = (state: RootState) => state.leagues.selectedLeagueId;

export default leaguesSlice.reducer;
