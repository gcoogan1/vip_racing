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
import CornBred from "../../../assets/drivers/CornBred.png";

type SocialLink = {
  username: string;
  url: string;
}

type YoutubeSocialLink = SocialLink & {
  channelId: string;
};


export type Driver = {
  id: number;
  name: string;
  rank: string
  gtTag: string;
  psnId: string;
  favCar: string;
  favTrack: string;
  hardware: string;
  flag: "us" | "ca" | "pr";
  cardImg: string;
  socials?: {
    twitch?: SocialLink;
    youtube?: YoutubeSocialLink;
    discord?: SocialLink;
  };
}

export const drivers: Driver[] = [
  {
    id: 8,
    name: "CyrusNikiGT",
    rank: "Team Leader",
    gtTag: "VIP_CyrusNikiGT",
    psnId: "CyrusNiki-GT",
    favCar: "Mazda RX-VISION GT3 CONCEPT",
    favTrack: "Nürburgring Nordschleife",
    hardware: "Logitech G PRO Racing Wheel",
    cardImg: CyrusNiki,
    flag: "ca",
    socials: {
      youtube: { username: "@CyrusNiki-GT", url: "https://www.youtube.com/@CyrusNiki-GT", channelId: "UCj2rFlSoPUPqmCzRsTpeGEg" },
    }
  },
  {
    id: 10,
    name: "AlmostPodium",
    rank: "Team Leader",
    gtTag: "VIP_AlmostPodium",
    psnId: "Kia10",
    favCar: "McLaren 650S GT3 ‘15",
    favTrack: "Deep Forest Raceway",
    hardware: "Fanatec ClubSport DD+",
    cardImg: AlmostPodium,
    flag: "ca",
    socials: {
      twitch: { username: "@AlmostPodium", url: "https://www.twitch.tv/AlmostPodium" },
      youtube: { username: "@AlmostPodium", url: "https://youtube.com/@AlmostPodium", channelId: "UCDK8ChKjGqcIFLGyCbF7xSA" },
    }
  },
  {
    id: 3,
    name: "Karl Forman",
    rank: "GR CUP PRO DRIVER",
    gtTag: "K.Forman",
    psnId: "DK03_GT",
    favCar: "Renault R.S.01 GT3 ‘16",
    favTrack: "Nürburgring Nordschleife",
    hardware: "Fanatec Gran Turismo DD Pro",
    cardImg: KForman,
    flag: "us",
    socials: {
      youtube: { username: "@DK03GT", url: "https://youtube.com/@DK03GT", channelId: "UC_sbK9bM9LpiFlon_KoSFuw" },
    }
  },
  {
    id: 7,
    name: "Da Crawl3r",
    rank: "The Enforcer",
    gtTag: "VIP_NotCrawl3r",
    psnId: "Da_Crawl3r",
    favCar: "VW Beetle Gr.3",
    favTrack: "Trial Mountain Circuit",
    hardware: "Logitech G PRO Racing Wheel",
    cardImg: NotCrawl3r,
    flag: "us",
    socials: {
      youtube: { username: "@Da_Crawl3r", url: "https://youtube.com/@Da_Crawl3r", channelId: "UChhn-Ho72-weSlgGyKqqIog" },
    }
  },
  {
    id: 24,
    name: "LC Broker",
    rank: "The paCE sETTER",
    gtTag: "VIP_NotBroker",
    psnId: "LcBroker",
    favCar: "Ferrari F40 ‘92",
    favTrack: "Nürburgring Nordschleife",
    hardware: "Logitech G PRO Racing Wheel",
    cardImg: LCBroker,
    flag: "us",
    socials: {
      youtube: { username: "@LC_Broker", url: "https://youtube.com/@LC_Broker", channelId: "UC_4ZHG_VEPZzSAtgxPvEc4g" },
    }
  },
  {
    id: 316,
    name: "ThrottleGeist",
    rank: "The nerd",
    gtTag: "ThrottleGeist",
    psnId: "ThrottleGeist",
    favCar: "BMW M6 GT3 ‘16",
    favTrack: "Nürburgring Nordschleife",
    hardware: "Logitech G PRO Racing Wheel",
    cardImg: ThrottleGeist,
    flag: "ca",
    socials: {
      youtube: { username: "@ThrottleGeistRacing", url: "https://youtube.com/@ThrottleGeistRacing", channelId: "UCdASAeIprWZxK_P1xaO3Ong" },
      twitch: { username: "@ThrottleGeist", url: "https://www.twitch.tv/throttlegeist" },
    }
  },
  {
    id: 23,
    name: "The Cap",
    rank: "The Scout",
    gtTag: "VIP_TheCap",
    psnId: "Gemini-Titan",
    favCar: "Nissan GT-R NISMO ‘17",
    favTrack: "Deep Forest Raceway",
    hardware: "Logitech G PRO Racing Wheel",
    cardImg: TheCap,
    flag: "us",
    socials: {
      youtube: { username: "@EJCR_Cap", url: "https://youtube.com/@EJCR_Cap", channelId: "UC1Bn8HomwnhOmtukIA5Bkzw"},
    }
  },
  {
    id: 36,
    name: "Scarlxrd",
    rank: "Controller Specialist",
    gtTag: "VIP_Scarlxrd",
    psnId: "HypnotizeMinds36",
    favCar: "Lamborghini Huracan GT3 ‘15",
    favTrack: "Circuit de Barcelona-Catalunya",
    hardware: "DualSense Controller",
    cardImg: Scarlxrd,
    flag: "ca",
  },
  {
    id: 47,
    name: "Player",
    rank: "Shadow Specialist",
    gtTag: "VIP_PLAYER",
    psnId: "sup_player_1",
    favCar: "Genesis G70 GR4",
    favTrack: "Deep Forest Raceway",
    hardware: "Logitech G PRO Racing Wheel",
    cardImg: Player,
    flag: "us",
    socials: {
      youtube: { username: "@Workman_racing", url: "https://youtube.com/@Workman_racing", channelId: "UC3Ne0FfVTPFL2893gihFaOA" },
    }
  },
  {
    id: 78,
    name: "Ace GT",
    rank: "tHE wiNGMAN",
    gtTag: "VIP_ACE_GT",
    psnId: "VIP_ACE_GT",
    favCar: "Ferrari 458 Italia",
    favTrack: "Sardegna - Road Track - A Reverse",
    hardware: "MOZA R12 V2",
    cardImg: AceGT,
    flag: "us",
  },
  {
    id: 88,
    name: "StrokerAce",
    rank: "tHE pILOT",
    gtTag: "VIP_StrokerAce",
    psnId: "EJCR_StrokerAce",
    favCar: "Porsche 911 RSR (911) ‘17",
    favTrack: "Circuit de Spa-Francorchamps",
    hardware: "Logitech G PRO Racing Wheel",
    cardImg: StrokerAce,
    flag: "us",
    socials: {
      youtube: { username: "@VIP_StrokerAce", url: "https://youtube.com/@VIP_StrokerAce", channelId: "UC5Q2J_v76zwxbOM-vJmMdIA" },
    }
  },
  {
    id: 66,
    name: "DewayneT",
    rank: "gt4 sim racer",
    gtTag: "VIP_DewayneT",
    psnId: "resigned_staff3",
    favCar: "Genesis G70 GR4",
    favTrack: "Nürburgring Nordschleife",
    hardware: "Fanatec Gran Turismo DD Pro",
    cardImg: DewayneT,
    flag: "us"
  },
  {
    id: 112,
    name: "Prince Plaka",
    rank: "Muscle car Specialist",
    gtTag: "VIP Prince Plaka",
    psnId: "VIP_Prince_Plaka",
    favCar: "Ford GT Race Car ‘18",
    favTrack: "Nürburgring Nordschleife",
    hardware: "Thrustmaster T248",
    cardImg: PrincePlaka,
    flag: "pr",
    socials: {
      youtube: { username: "@plakaplumtv3831", url: "https://youtube.com/@plakaplumtv3831", channelId: "UC1Bn8HomwnhOmtukIA5Bkzw" },
    }
  },
  {
    id: 333,
    name: "Left2PassU",
    rank: "thE fuEL wHISPERER",
    gtTag: "VIP_Left2PassU",
    psnId: "RKL-333",
    favCar: "Ferrari 458 Italia",
    favTrack: "Watkins Glen Long Course",
    hardware: "Fanatec Gran Turismo DD Pro",
    cardImg: Left2PassU,
    flag: "us",
  },
  {
    id: 14,
    name: "JP Scale",
    rank: "tHE technician",
    gtTag: "VIP_JP_scale",
    psnId: "JP_SCALE",
    favCar: "Lamborghini GT3 ‘15",
    favTrack: "Deep Forest Raceway",
    hardware: "Logitech G PRO Racing Wheel",
    cardImg: JPScale,
    flag: "ca",
    socials: {
      youtube: { username: "@Jp_scale", url: "https://youtube.com/@Jp_scale", channelId: "UCx9ty0Xxxb-rTRoKN3kVGWQ" },
    }
  },
  {
    id: 323,
    name: "Rowdy Burns",
    rank: "The wildcard",
    gtTag: "VIP_Rowdy Burns",
    psnId: "LAY-ZEE",
    favCar: "Porsche 911 RSR (911) ‘17",
    favTrack: "Mount Panorama Circuit",
    hardware: "Logitech G PRO Racing Wheel",
    cardImg: RowdyBurns,
    flag: "ca",
    socials: {
      youtube: { username: "@VIP_rowdyburns", url: "https://youtube.com/@VIP_rowdyburns", channelId: "UC_PAOT7sqREVJYUE1YRr78Q" },
    }
  },
  {
    id: 11,
    name: "CornBred",
    rank: "The Fockr",
    gtTag: "VIP_CornBred",
    psnId: "JRizzell11",
    favCar: "BMW M6 GT3 ‘16",
    favTrack: "Nürburgring Nordschleife",
    hardware: "Logitech G PRO Racing Wheel",
    cardImg: CornBred,
    flag: "ca",
    socials: {
      youtube: { username: "@CornBredGaming_ViP", url: "https://youtube.com/@CornBredGaming_ViP", channelId: "UCKBCAUpKvY-zqc6Zt9QI74Q" },
    }
  },
]