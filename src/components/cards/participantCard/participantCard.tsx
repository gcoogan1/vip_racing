import Button from "../../button/button";
import ArrowRight from "../../../assets/icon/ArrowRight.svg?react";
import SocialLink from "../../socialLink/socialLink";
import Youtube from "../../../assets/social/SocialYoutube.svg?react";
import Twitch from "../../../assets/social/SocialTwitch.svg?react";
import {
  CardContainer,
  InfoItem,
  InfoLabel,
  InfoList,
  InfoValue,
  ParticipantContent,
  ParticipantNumber,
  SocialContainer,
  Subtitle,
  SubtitleContainer,
  TextContent,
  Title,
  TitleContainer,
} from "./participantCard.styles";

type SocialLink = {
  username: string;
  url: string;
};

type ParticipantCardProps = {
  participantNum: number;
  name: string;
  carTeam: string;
  crew?: string;
  psnId: string;
  socials?: {
    twitch?: SocialLink;
    youtube?: SocialLink;
    discord?: SocialLink;
  };
  resultsOnClick: () => void;
};

const ParticipantCard = ({
  participantNum,
  name,
  carTeam,
  crew,
  psnId,
  socials,
  resultsOnClick,
}: ParticipantCardProps) => {
    const addZero = (num: number) => (num < 10 ? `0${num}` : num);
  return (
    <CardContainer>
      <ParticipantNumber>{addZero(participantNum)}</ParticipantNumber>
      <ParticipantContent>
        <TextContent>
          <TitleContainer>
            <Title>{name}</Title>
            <SubtitleContainer>
              <Subtitle>{carTeam}</Subtitle>
            </SubtitleContainer>
          </TitleContainer>
          <InfoList>
            <InfoItem>
              <InfoLabel>Crew</InfoLabel>
              <InfoValue>{crew || "Free Agent"}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>PSN ID</InfoLabel>
              <InfoValue>{psnId}</InfoValue>
            </InfoItem>
          </InfoList>
        </TextContent>
        {socials && (
          <SocialContainer>
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
          </SocialContainer>
        )}
      <Button
        variant="secondary"
        label="View Results"
        isDisabled={!resultsOnClick}
        onClick={resultsOnClick && (() => resultsOnClick())}
        icon={<ArrowRight width={16} height={16} />}
      />
      </ParticipantContent>
    </CardContainer>
  );
};

export default ParticipantCard;
