type InfoChipDetails = {
  rounds: number;
  category: string;
  description: string;
};

type LeagueCategory = {
  title: string;
  chips: InfoChipDetails[];
};

export const vipChamCategories: LeagueCategory[] = [
  {
    title: "Season Format",
    chips: [
      {
        rounds: 1,
        category: "Division",
        description:
          "There is a single division with all the drivers fighting for the same championship.",
      },
      {
        rounds: 60,
        category: "Total Drivers",
        description:
          "GT7 drivers from any crew, and skill level are welcome to compete in the league.",
      },
      {
        rounds: 20,
        category: "Teams",
        description:
          "Each team is assigned a unique Gr.3 car that they will run the across all races in the season.",
      },
      {
        rounds: 3,
        category: "Drivers Per Team",
        description:
          "Drivers will be teamed up in groups of three to represent a manufacturer throughout the season.",
      },
    ],
  },
  {
    title: "Race Scedules",
    chips: [
      {
        rounds: 8,
        category: "Rounds",
        description:
          "All drivers will get the opportunity to race in and earn points in eight rounds of racing.",
      },
      {
        rounds: 1,
        category: "Grand Final",
        description:
          "The top 15 drivers after the 8 rounds take part in a special race to help crown the champions.",
      },
      {
        rounds: 2,
        category: "Race Days",
        description:
          "Drivers will have to pick whether to race on Wednesday or Friday evenings.",
      },
      {
        rounds: 2,
        category: "Splits",
        description:
          "For their selected day, drivers will have to pick whether to race at 9pm or 11pm EST.",
      }
    ]
  },
  {
    title: "Championship Points",
    chips: [
      {
        rounds: 174,
        category: "Points per race",
        description:
          "Every driver that completes the scheduled race within the regulations will earn at least one point.",
      },
      {
        rounds: 15,
        category: "driver grand final",
        description:
          "The top fifteen highest scoring drivers get an opportunity to run a bonus final race worth double points.",
      },
      {
        rounds: 1,
        category: "team championship",
        description:
          "The team with the most collective points among their three drivers, wins the Team Championship.", 
      },
      {
        rounds: 1,
        category: "driver championship",
        description:
          "The driver with the most points after the Grand Final, gets crowned the Driver Champion.", 
      }
    ]
  }
];