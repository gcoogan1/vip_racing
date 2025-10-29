import Button from "../../button/button";
import ArrowRight from "../../../assets/icon/ArrowRight.svg?react";
import { TeamCardContainer, TeamNumber, TeamImage, TeamInfo, TeamName, DriversList, DriverItem, DriverLabel, DriverName } from "./teamCard.styles";

type TeamCardProps = {
  teamNumber: number;
  teamName: string;
  teamImage: string;
  teamDrivers: string[];
  onClick?: () => void;
  isDisabled?: boolean;
}

const TeamCard = ({ teamNumber, teamName, teamDrivers, teamImage, isDisabled }: TeamCardProps) => {
  const addZero = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <TeamCardContainer>
      <TeamNumber>{addZero(teamNumber)}</TeamNumber>
      <TeamImage src={teamImage} alt={`Team ${teamName}`} />
      <TeamInfo>
        <TeamName>{teamName}</TeamName>
        <DriversList>
          {teamDrivers.map((driver, index) => (
            <DriverItem key={index}>
              <DriverLabel>Driver {index + 1}</DriverLabel>
              <DriverName>{driver}</DriverName>
            </DriverItem>
          ))}
        </DriversList>
        <Button isDisabled={isDisabled} label="View Results" onClick={() => alert(`Viewing results for Team ${teamNumber}`)} variant="secondary" icon={<ArrowRight width={16} height={16} />} />
      </TeamInfo>
    </TeamCardContainer>
  )
}

export default TeamCard