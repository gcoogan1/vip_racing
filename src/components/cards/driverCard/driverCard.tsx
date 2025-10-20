import React from "react";
import SocialLink from "../../socialLink/socialLink";
import Youtube from "../../../assets/social/SocialYoutube.svg?react";
import Twitch from "../../../assets/social/SocialTwitch.svg?react";
import USFlag from "../../../assets/icon/USFlag.svg?react";
import CAFlag from "../../../assets/icon/FlagCanada.svg?react";
import PRFlag from "../../../assets/icon/FlagPuertoRico.svg?react";
import {
  DriverCardContainer,
  DriverImage,
  DriverInfo,
  DriverInfoItem,
  DriverInfoLabel,
  DriverInfoList,
  DriverInfoValue,
  DriverName,
  DriverRank,
  DriverSocialContainer,
  DriverTextContainer,
  DriverTitleContainer,
  RankContainer,
} from "./driverCard.styles";

type SocialLink = {
  username: string;
  url: string;
};

type DriverCardProps = {
  id: number;
  name: string;
  rank: string;
  gtTag: string;
  psnId: string;
  favCar: string;
  favTrack: string;
  hardware: string;
  cardImg: string;
  flag: "us" | "ca" | "pr";
  socials?: {
    twitch?: SocialLink;
    youtube?: SocialLink;
    discord?: SocialLink;
  };
};

const DriverCard = ({
  name,
  rank,
  gtTag,
  psnId,
  favCar,
  favTrack,
  hardware,
  cardImg,
  flag,
  socials,
}: DriverCardProps) => {

  console.log(flag);

  return (
    <DriverCardContainer>
      <DriverImage src={cardImg} alt={name} loading="lazy" />
      <DriverInfo>
        <DriverTextContainer>
          <DriverTitleContainer>
            <DriverName>{name}</DriverName>
            <RankContainer>
              {flag === "us" && <USFlag width={24} height={24} />}
              {flag === "ca" && <CAFlag width={24} height={24} />}
              {flag === "pr" && <PRFlag width={24} height={24} />}
              <DriverRank>{rank}</DriverRank>
            </RankContainer>
          </DriverTitleContainer>
          <DriverInfoList>
            <DriverInfoItem>
              <DriverInfoLabel>GT7 Tag</DriverInfoLabel>
              <DriverInfoValue>{gtTag}</DriverInfoValue>
            </DriverInfoItem>
            <DriverInfoItem>
              <DriverInfoLabel>PSN ID</DriverInfoLabel>
              <DriverInfoValue>{psnId}</DriverInfoValue>
            </DriverInfoItem>
            <DriverInfoItem>
              <DriverInfoLabel>Fav Car</DriverInfoLabel>
              <DriverInfoValue>{favCar}</DriverInfoValue>
            </DriverInfoItem>
            <DriverInfoItem>
              <DriverInfoLabel>Fav Track</DriverInfoLabel>
              <DriverInfoValue>{favTrack}</DriverInfoValue>
            </DriverInfoItem>
            <DriverInfoItem>
              <DriverInfoLabel>Hardware</DriverInfoLabel>
              <DriverInfoValue>{hardware}</DriverInfoValue>
            </DriverInfoItem>
          </DriverInfoList>
        </DriverTextContainer>
        {socials && (
          <DriverSocialContainer>
            {socials.youtube && (
              <SocialLink
                href={socials.youtube.url}
                label={socials.youtube.username}
                icon={<Youtube width={20} height={20} />}
              />
            )}
            {socials.twitch && (
              <SocialLink
                href={socials.twitch.url}
                label={socials.twitch.username}
                icon={<Twitch width={20} height={20} />}
              />
            )}
          </DriverSocialContainer>
        )}
      </DriverInfo>
    </DriverCardContainer>
  );
};

export default React.memo(DriverCard);
