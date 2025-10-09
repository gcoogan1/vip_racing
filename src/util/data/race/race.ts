type RaceStatsData = {
  rank: number | string;
  driver: string;
  time: string;
};

type RaceData = {
  raceName: string;
  date: string;
  stats: RaceStatsData[];
};

export const raceData: RaceData[] = [
  {
    raceName: "Daily Race B",
    date: "Yas Marina Circuit",
    stats: [
      { rank: 58, driver: "Da_Crawl3r", time: "1:50.467" },
      { rank: 79, driver: "ThrottleGeist", time: "1:50.698" },
      { rank: 562, driver: "VIP_CyrusNikiGT", time: "1:51.302" },
      { rank: 1236, driver: "VIP_AlmostPodium", time: "1:52.635" },
    ],
  },
  {
    raceName: "Daily Race C",
    date: "Circuit de Spa-Francorchamps",
    stats: [
      { rank: 102, driver: "ThrottleGeist", time: "2:34.212" },
      { rank: 352, driver: "VIP_CyrusNikiGT", time: "2:34.963" },
      { rank: 555, driver: "VIP_PlAYER", time: "2:35.236" },
      { rank: 2696, driver: "VIP Prince Plaka", time: "2:37.345" },
      { rank: 12369, driver: "VIP_Scarlxrd", time: "2:38.828" },
    ],
  },
]