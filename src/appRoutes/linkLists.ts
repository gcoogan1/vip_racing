
type Link = {
  to: string;
  label: string;
};

export const menuLinks: Link[] = [
  { to: "/drivers", label: "Drivers" },
  { to: "/media", label: "Media" },
  { to: "/shop", label: "Shop" },
  ];

export const gameLinks: Link[] = [
  { to: "/games/gran-turismo-7", label: "Gran Turismo 7" },
  { to: "/games/iRacing", label: "iRacing" },
  { to: "/games/f1-25", label: "F1 25" },
];

export const vipLeagues: Link[] = [
  { to: "/leagues/gt3", label: "VIP GT3 Championship" },
  { to: "/leagues/formula1", label: "VIP Formula 1 League" },
  { to: "/leagues/lobby", label: "VIP Monthly Lobby" },
];

export const competitionLinks: Link[] = [
  { to: "/competitions/gt-world-series", label: "Gran Turismo World Series" },
  { to: "/competitions/naughty-racing-league", label: "Naughty Racing League" },
];