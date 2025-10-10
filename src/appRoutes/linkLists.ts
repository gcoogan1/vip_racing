
type Link = {
  to: string;
  label: string;
};

type ExternalLink = {
  href: string;
  label: string;
};

export const menuLinks: Link[] = [
  { to: "/drivers", label: "Drivers" },
  { to: "/media", label: "Media" },
  { to: "/shop", label: "Shop" },
  ];

export const gameLinks: ExternalLink[] = [
  { href: "https://www.gran-turismo.com/us/gt7/top/", label: "Gran Turismo 7" },
  { href: "https://www.iracing.com/", label: "iRacing" },
  { href: "https://www.ea.com/en/games/f1/f1-25", label: "F1 25" },
];

export const vipLeagues: Link[] = [
  { to: "/leagues/vip-gt3", label: "VIP GT3 Championship" },
  { to: "/leagues/vip-formula1", label: "VIP Formula 1 League" },
  { to: "/leagues/vip-lobby", label: "VIP Monthly Lobby" },
];

export const competitionLinks: Link[] = [
  { to: "/competitions/gt-world-series", label: "Gran Turismo World Series" },
  { to: "/competitions/naughty-racing-league", label: "Naughty Racing League" },
];