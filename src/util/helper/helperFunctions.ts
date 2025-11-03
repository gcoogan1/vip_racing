import type { DriverStandings, TeamStandings } from "../../types/storeTypes";

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


export const formatRaceDate = (dateString: string) => {
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

  return `${weekday}, ${day} ${month} ${year} · ${hour}:${minute}${dayPeriod?.toUpperCase()} ${timeZone}`;
}

// Calculate total points for a driver or team from ALL session results for the league
export const getTotalPoints = (
  id: number,
  type: "driver" | "team",
  allSessionResults: (TeamStandings | DriverStandings)[]
): number => {
  let totalPoints = 0;

  allSessionResults.forEach((result) => {
    const isTeamMatch =
      type === "team" &&
      "team_id" in result &&
      result.team_id === id;

    const isDriverMatch =
      type === "driver" &&
      "driver_id" in result &&
      result.driver_id === id;

    if (isTeamMatch || isDriverMatch) {
      totalPoints += result.points || 0;
    }
  });

  return totalPoints;
};