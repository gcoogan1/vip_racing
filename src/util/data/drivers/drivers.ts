import CyrusNiki from "../../../assets/drivers/CyrusNikiGT.png";
import AlmostPodium from "../../../assets/drivers/AlmostPodium.png";
import KForman from "../../../assets/drivers/KForman.png";
import NotCrawl3r from "../../../assets/drivers/NotCrawl3r.png";
import LCBroker from "../../../assets/drivers/LCBrokerVR.png";
import ThrottleGeist from "../../../assets/drivers/ThrottleGeist.png";
import TheCap from "../../../assets/drivers/TheCap.png";
import Scarlxrd from "../../../assets/drivers/Scarlxrd.png";
import Player from "../../../assets/drivers/Player.png";
import AceGT from "../../../assets/drivers/AceGT.png";
import StrokerAce from "../../../assets/drivers/StrokerAce.png";
import DewayneT from "../../../assets/drivers/DewayneT.png";
import PrincePlaka from "../../../assets/drivers/PrincePlaka.png";
import Left2PassU from "../../../assets/drivers/Left2PassU.png";
import JPScale from "../../../assets/drivers/JPScale.png";
import RowdyBurns from "../../../assets/drivers/RowdyBurns.png";

type Driver = {
  id: number;
  name: string;
  rank: string
  gtTag: string;
  psnId: string;
  favCar: string;
  favTrack: string;
  hardware: string;
  cardImg: string;
  socials?: {
    twitch?: string;
    youtube?: string;
    discord?: string;
  };
}

export const drivers: Driver[] = [
  {
    id: 8,
    name: "CyrusNikiGT",
    rank: "Team Leader",
    gtTag: "VIP_CyrusNikiGT",
    psnId: "CyrusNiki-GT",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: CyrusNiki,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 10,
    name: "AlmostPodium",
    rank: "Team Leader",
    gtTag: "VIP_AlmostPodium",
    psnId: "Kia10",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: AlmostPodium,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 3,
    name: "K. Forman",
    rank: "pro GT4 driver",
    gtTag: "K.Forman",
    psnId: "DK03_GT",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: KForman,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 7,
    name: "Da_Crawl3r",
    rank: "Team Enforcer",
    gtTag: "VIP_NotCrawl3r",
    psnId: "Da_Crawl3r",
    favCar: "VW Beetle Gr.3",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: NotCrawl3r,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 24,
    name: "LC Broker",
    rank: "gt3 sim racer",
    gtTag: "LC Broker_VR",
    psnId: "LcBroker",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: LCBroker,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 316,
    name: "ThrottleGeist",
    rank: "gt3 sim racer",
    gtTag: "ThrottleGeist",
    psnId: "ThrottleGeist",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: ThrottleGeist,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 236,
    name: "The Cap",
    rank: "gt3 sim racer",
    gtTag: "VIP_TheCap",
    psnId: "Gemini-Titan",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: TheCap,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 36,
    name: "Scarlxrd",
    rank: "gt3 sim racer",
    gtTag: "VIP_Scarlxrd",
    psnId: "HypnotizeMinds36",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: Scarlxrd,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 47,
    name: "Player",
    rank: "gt3 sim racer",
    gtTag: "VIP_PLAYER",
    psnId: "sup_player_1",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: Player,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 78,
    name: "Ace GT",
    rank: "gt3 sim racer",
    gtTag: "VIP_ACE_GT",
    psnId: "VIP_ACE_GT",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: AceGT,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 88,
    name: "StrokerAce",
    rank: "gt3 sim racer",
    gtTag: "VIP_StrokerAce",
    psnId: "EJCR_StrokerAce",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: StrokerAce,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 66,
    name: "DewayneT",
    rank: "gt3 sim racer",
    gtTag: "VIP_DewayneT",
    psnId: "resigned_staff3",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: DewayneT,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 112,
    name: "Prince Plaka",
    rank: "gt3 sim racer",
    gtTag: "VIP Prince Plaka",
    psnId: "VIP_Prince_Plaka",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: PrincePlaka,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 333,
    name: "Left2PassU",
    rank: "gt3 sim racer",
    gtTag: "VIP_Left2PassU",
    psnId: "RKL-333",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: Left2PassU,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 14,
    name: "JP Scale",
    rank: "gt3 sim racer",
    gtTag: "VIP_JP_scale",
    psnId: "JP_SCALE",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: JPScale,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
  {
    id: 23,
    name: "Rowdy Burns",
    rank: "gt3 sim racer",
    gtTag: "VIP_Rowdy Burns",
    psnId: "JLAY-ZEE",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen",
    hardware: "Fanatec DD Pro",
    cardImg: RowdyBurns,
    socials: {
      twitch: "@username",
      youtube: "@usernmame",
    }
  },
]