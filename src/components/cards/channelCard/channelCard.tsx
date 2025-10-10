import React from "react";
import SocialLink from "../../socialLink/socialLink";
import Youtube from "../../../assets/social/SocialYoutube.svg?react";
import {
  ChannelCardContainer,
  DriverImage,
  DriverInfo,
  DriverName,
} from "./channelCard.styles";

type ChannelCardProps = {
  name: string;
  username: string;
  url: string;
  cardImg?: string;
};

const ChannelCard = ({ name, username, url, cardImg }: ChannelCardProps) => {
  return (
    <ChannelCardContainer>
      <DriverImage src={cardImg} alt={name} loading="lazy" />
      <DriverInfo>
        <DriverName>{name}</DriverName>
        <SocialLink
          href={url}
          label={username}
          icon={<Youtube width={20} height={20} />}
        />
      </DriverInfo>
    </ChannelCardContainer>
  );
};

export default React.memo(ChannelCard);
