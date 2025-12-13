// Utility functions for various helper tasks

// Convert object keys from snake_case to camelCase
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// Convert a time string to local time format
export const toLocalTime = (time?: string) => {
  if (!time) return "";
  return new Date(time).toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });
};

// Format a race date string with optional mini format
export const formatRaceDate = (dateString: string, isMini?: boolean) => {
  const date = new Date(dateString);

  // Convert to EST
  const options: Intl.DateTimeFormatOptions = {
    // weekday: "long",
    weekday: "short",
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

