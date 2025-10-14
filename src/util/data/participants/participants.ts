type SocialLink = {
  username: string;
  url: string;
}

type YoutubeSocialLink = SocialLink & {
  channelId: string;
};

type Participant = {
  participantNum: number;
  name: string;
  carTeam: string
  psnId: string;
  crew: string;
  resultsPath: string;
  socials?: {
    twitch?: SocialLink;
    youtube?: YoutubeSocialLink;
    discord?: SocialLink;
  };
}

export const participants: Participant[] = [
  {
    participantNum: 1,
    name: "VIP_CyrusNiki-GT",
    carTeam: "Ferrari",
    psnId: "CyrusNiki-GT",
    crew: "Victory in Performance Racing",
    resultsPath: "/results/cyrusnikigt",
    socials: {
      twitch: { username: "@username", url: "https://twitch.tv/username" },
      youtube: { username: "@CyrusNiki-GT", url: "https://www.youtube.com/@CyrusNiki-GT", channelId: "UCj2rFlSoPUPqmCzRsTpeGEg" },
    }
  },
  {
    participantNum: 2,
    name: "AlmostPodium",
    carTeam: "VIP Racing",
    psnId: "Kia10",
    crew: "VIP Racing",
    resultsPath: "/results/almostpodium",
    // socials: {
    //   twitch: { username: "@username", url: "https://twitch.tv/username" },
    //   youtube: { username: "@username", url: "https://youtube.com/username", channelId: "UC1Bn8HomwnhOmtukIA5Bkzw" },
    // }
  },
  {
    participantNum: 3,
    name: "Driver Three",
    carTeam: "Team Name",
    psnId: "PSN_ID_Three",
    crew: "Crew Name",
    resultsPath: "/results/driverthree",
  },
  {
    participantNum: 4,
    name: "Driver Four",
    carTeam: "Team Name",
    crew: "Crew Name",
    psnId: "PSN_ID_Four",
    resultsPath: "/results/driverfour",
  },
  {
    participantNum: 5,
    name: "Driver Five",
    carTeam: "Team Name",
    crew: "Crew Name",
    psnId: "PSN_ID_Five",
    resultsPath: "/results/driverfive",
  },
]   