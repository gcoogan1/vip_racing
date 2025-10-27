// store/types.ts

export interface League {
  id: number;
  name: string;
  season: string;
  description: string;
  start_date: string | null;
  end_date: string | null;
}

export interface Round {
  id: number;
  league_id: number;
  round_num: number;
  round_name: string;
}

export interface RaceDay {
  id: number;
  round_id: number;
  race_date: string;
  race_day_name: string;
}

export interface Split {
  id: number;
  race_day_id: number;
  split_name: string;
}

export interface Session {
  id: number;
  split_id: number;
  type: string;
  start_time: string | null;
  session_name: string | null;
  race_day_id: number;
}

export interface Driver {
  id: number;
  name: string;
  psn_id: string;
  team_id: number;
  league_id: number;
  crew?: string;
  youtube_link?: string;
  youtube_username?: string;
  twitch_link?: string;
  twitch_username?: string;
}

export interface DriverLineup {
  id: number;
  split_id: number;
  driver_id: number;
  lineup_num: number;
}

export interface DriverStandings {
  id: number;
  session_id: number;
  driver_id: number;
  points: number;
  time: string;
}

export interface Team {
  id: number;
  league_id: number;
  team_name: string;
  team_logo: string;
}

export interface TeamLineup {
  id: number;
  league_id: number;
  team_id: number;
  lineup_num: number;
}

export interface TeamStandings {
  id: number;
  session_id: number;
  team_id: number;
  points: number;
  race_date: string;
}
