import type {
  DriverStandings,
  RaceDay,
  Round,
  Session,
  SessionSettings,
  TeamStandings,
} from "../../types/storeTypes";

export const toCamelCase = (obj: any) => {
  if (!obj || typeof obj !== "object") return obj;
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      // Convert snake_case to camelCase
      const camelKey = key.replace(/_([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );
      return [camelKey, value];
    })
  );
};

export const toLocalTime = (time?: string) => {
  if (!time) return "";
  return new Date(time).toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });
};

export const formatRaceDate = (dateString: string, isMini?: boolean) => {
  const date = new Date(dateString);

  // Convert to EST
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/New_York",
    timeZoneName: "short", // gives "EST" or "EDT"
  };

  const formattedParts = new Intl.DateTimeFormat("en-US", options)
    .formatToParts(date)
    .reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {} as Record<string, string>);

  const weekday = formattedParts.weekday;
  const day = formattedParts.day;
  const month = formattedParts.month;
  const year = formattedParts.year;
  const hour = formattedParts.hour;
  const minute = formattedParts.minute;
  const dayPeriod = formattedParts.dayPeriod;
  const timeZone = formattedParts.timeZoneName?.replace(/\s/g, "");

  const miniDate = `${day} ${month}`;
  if (isMini) {
    return miniDate;
  }

  return `${weekday}, ${day} ${month} ${year} · ${hour}:${minute}${dayPeriod?.toUpperCase()} ${timeZone}`;
};

// Calculate total points for a driver or team from ALL session results for the league
export const getTotalPoints = (
  id: number,
  type: "driver" | "team",
  allSessionResults: (TeamStandings | DriverStandings)[]
): number => {
  let totalPoints = 0;

  allSessionResults.forEach((result) => {
    const isTeamMatch =
      type === "team" && "team_id" in result && result.team_id === id;

    const isDriverMatch =
      type === "driver" && "driver_id" in result && result.driver_id === id;

    if (isTeamMatch || isDriverMatch) {
      totalPoints += result.points || 0;
    }
  });

  return totalPoints;
};

// Get all session results for a driver across all sessions
export const getAllDriverSessionPoints = (
  id: number,
  type: "driver",
  allSessionResults: DriverStandings[]
): DriverStandings[] => {
  const driverPoints: DriverStandings[] = [];

  allSessionResults.forEach((result) => {
    const isDriverMatch =
      type === "driver" && "driver_id" in result && result.driver_id === id;
    if (isDriverMatch) {
      driverPoints.push(result);
    }
  });

  return driverPoints;
};

// Get all session results for a team across all sessions
export const getAllTeamSessionPoints = (
  id: number,
  type: "team",
  allSessionResults: TeamStandings[]
): TeamStandings[] => {
  const teamPoints: TeamStandings[] = [];

  allSessionResults.forEach((result) => {
    const isTeamMatch =
      type === "team" && "team_id" in result && result.team_id === id;

    if (isTeamMatch) {
      teamPoints.push(result);
    }
  });

  return teamPoints;
};


export const getParticipantStandingInfo = (
  totalPoints: DriverStandings[] |TeamStandings[],
  sessions: Session[],
  sessionSettings: SessionSettings[],
  raceDays: RaceDay[],
  rounds: Round[]
) => {
  const sessionResults = totalPoints
    .map((entry) => {
      // 1. Find the session
      const session = sessions.find((s) => s.id === entry.session_id);
      if (!session) return null;

      // 1a. Find the session settings for the session
      const sessionSetting = sessionSettings.find(
        (ss) => ss.session_id === session.id
      );
      if (!sessionSetting) return null;

      // 2. Find the race day for the session
      const raceDay = raceDays.find((r) => r.id === session.race_day_id);
      if (!raceDay) return null;

      // 3. Find the round for the race day
      const round = rounds.find((r) => r.id === raceDay.round_id);
      if (!round) return null;

      return {
        roundNum: round.round_num,
        roundName: round.round_name,
        raceDate: formatRaceDate(raceDay.race_date, true),
        points: entry.points,
        raceTrack: sessionSetting.track,
      };
    })
    // Remove nulls
    .filter(
      (
        result
      ): result is {
        roundNum: number;
        roundName: string;
        raceDate: string;
        points: number;
        raceTrack: string;
      } => result !== null
    );
  return sessionResults;
};
