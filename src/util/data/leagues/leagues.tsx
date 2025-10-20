import MclarenDrifting from "../../../assets/card/McLarenDrifting.svg"
import F3500 from "../../../assets/card/F3500Pits.svg"
import CarsRacingHighlands from "../../../assets/card/CarsRacingHighlands.svg"


type League = {
  name: string;
  season: string;
  description: string;
  miniImg: string;
  image: string;
  imgAlt: string;
  buttonLabel: string;
  buttonIcon?: React.ReactNode;
  route?: string;
};

export const leagues: League[] = [
  {
    name: "VIP Championship",
    season: "5 race season. 1 Grand finale.",
    description: "Take part in the ultimate league on Gran Turismo 7. Battle across multiple thrilling rounds, which are introduced in a new format every year, with some of the most competitive drivers.",
    miniImg: "👑",
    image: MclarenDrifting,
    imgAlt: "McLaren car drifting on a racetrack",
    buttonLabel: "Coming Soon",
    route: "/leagues/vip-gt3"
  },
  {
    name: "VIP Formula 1 League",
    season: "3 race season. once a year.",
    description: "Experience the intensity of open wheel racing in VIP’s official F1 style league. 16 drivers in teams of two, fight to win the Driver’s and Team’s Championship in 3 challenging races.",
    miniImg: "🏎️",
    image: F3500,
    imgAlt: "F3500 car on a racetrack",
    buttonLabel: "Coming Soon",
    route: "/leagues/vip-formula1"
  },
  {
    name: "VIP Monthly Lobby",
    season: "3 race session. once a month.",
    description: "Join VIP members in an evening of high-octane racing through multiple disciplines. The hosted lobby aims to provide a fun racing environment designed for drivers to compete with VIP members.",
    miniImg: "🏁",
    image: CarsRacingHighlands,
    imgAlt: "Cars racing in the highlands",
    buttonLabel: "Coming Soon",
    route: "/leagues/vip-lobby"
  }
]