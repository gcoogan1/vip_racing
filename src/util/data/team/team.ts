import CarsRacingForest from "../../../assets/card/CarsRacingForest.svg";
import CarsRacingCanyon from "../../../assets/card/CarsRacingCanyon.svg";
import CarsRacingSunset from "../../../assets/card/CarsRacingSunset.svg";

type TeamInfo = {
  title: string;
  info: string;
  imageSrc: string;
  side: "left" | "right";
}

export const teamData: TeamInfo[] = [
  {
    title: "GT7 Racing Community",
    info: "Our team is well-established in Gran Turismo 7’s online and multiplayer community. From daily races to league events, we consistently bring speed, skill, and clean racing to every grid.",
    imageSrc: CarsRacingForest,
    side: "right"
  },
  {
    title: "The VIP Experience",
    info: "We take pride in racing with respect. Every driver on our team is committed to clean, fair driving. By combining pace with sportsmanship, we ensure that every race is challenging, exciting, and enjoyable for everyone involved.",
    imageSrc: CarsRacingSunset,
    side: "left"
  },
  {
    title: "Competitive Leagues",
    info: "Beyond just racing, we also organize and host our own competitive leagues. These events are designed to test the best, with well-planned formats, balanced rules, and a focus on creating exciting racing for both drivers and fans.",
    imageSrc: CarsRacingCanyon,
    side: "right"
  }
];