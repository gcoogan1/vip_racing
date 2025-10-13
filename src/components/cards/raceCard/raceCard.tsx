import Button from "../../button/button";
import ArrowRight from "../../../assets/icon/ArrowRight.svg?react";
import {
  RaceCardContainer,
  RaceCardContent,
  RaceCardImage,
  RaceCardDetails,
  RaceInfo,
  RaceNumber,
  RaceDate,
  RaceTrack,
  ButtonsContainer,
} from "./raceCard.styles";

type RaceCardProps = {
  raceNumber: number;
  raceDate: string;
  raceTrack: string;
  raceImage: string;
  settingsOnClick: () => void;
  resultsOnClick: () => void;
};

const RaceCard = ({
  raceNumber,
  raceDate,
  raceTrack,
  raceImage,
  settingsOnClick,
  resultsOnClick,
}: RaceCardProps) => {
  return (
    <RaceCardContainer>
      <RaceCardContent>
        <RaceCardDetails>
          <RaceInfo>
            <RaceNumber>Race {raceNumber}</RaceNumber>
            <RaceDate>{raceDate}</RaceDate>
          </RaceInfo>
          <RaceTrack>{raceTrack}</RaceTrack>
        </RaceCardDetails>
        <ButtonsContainer>
          <Button variant="secondary" onClick={settingsOnClick} label="Event Settings" icon={<ArrowRight width={16} height={16} />} />
          <Button variant="secondary" onClick={resultsOnClick} label="View Results" icon={<ArrowRight width={16} height={16} />} />
        </ButtonsContainer>
      </RaceCardContent>
      <RaceCardImage src={raceImage} alt={`Image of race ${raceNumber}`} />
    </RaceCardContainer>
  );
};

export default RaceCard;
