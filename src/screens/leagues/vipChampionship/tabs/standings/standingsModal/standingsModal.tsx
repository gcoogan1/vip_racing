import TableRowLink from "../../../../../../components/tableRowLink/tableRowLink";
import type {
  Driver,
  DriverStandings,
  RaceDay,
  Round,
  Session,
  SessionSettings,
  Team,
  TeamStandings,
} from "../../../../../../types/storeTypes";
import {
  getAllDriverSessionPoints,
  getAllTeamSessionPoints,
  getParticipantStandingInfo,
} from "../../../../../../util/helper/helperFunctions";
import {
  CellText,
  ContentHeader,
  ContentSection,
  DateCell,
  ModalContent,
  ModalSubtitle,
  ModalSubtitleColor,
  ModalTitle,
  PointsCell,
  RoundsCell,
  RowDivider,
  StandingsTableContainer,
  StandingsTableContent,
  StandingsTableHeader,
  StandingsTableTitle,
  SubtitleContainer,
  TitleContnainer,
  TotalContainer,
  TotalPointsContainer,
  TotalPointsText,
  TotalText,
} from "./standingsModal.styles";

type StandingsModalProps = {
  selectedModal: Driver | Team;
  allTeamStandings: TeamStandings[];
  allDriverStandings: DriverStandings[];
  rounds: Round[];
  raceDays: RaceDay[];
  sessions: Session[];
  sessionSettings: SessionSettings[];
  leagueName: string;
};

const StandingsModal = ({
  selectedModal,
  allTeamStandings,
  allDriverStandings,
  rounds,
  raceDays,
  sessions,
  sessionSettings,
  leagueName,
}: StandingsModalProps) => {

  const isTeamModal = selectedModal && "team_name" in selectedModal;

  const name = isTeamModal
    ? selectedModal.team_name
    : selectedModal
    ? selectedModal.name
    : "";

  const totalSessionResults =
    isTeamModal ?
    getAllTeamSessionPoints(selectedModal.id, "team", allTeamStandings) : getAllDriverSessionPoints(
    selectedModal.id,
    "driver",
    allDriverStandings
  );

  const sessionResults = totalSessionResults
      ? getParticipantStandingInfo(
          totalSessionResults,
          sessions,
          sessionSettings,
          raceDays,
          rounds
        )
      : [];

  const getTotalPoints = () => {
    return sessionResults.reduce((acc, curr) => acc + (curr.points || 0), 0);
  };
  const totalPointsValue = getTotalPoints();

  return (
    <ModalContent>
      <TitleContnainer>
        <ModalTitle>{name}</ModalTitle>
        <SubtitleContainer>
          <ModalSubtitleColor>{leagueName}</ModalSubtitleColor>
          <ModalSubtitle>{isTeamModal ? "Team" : "Driver"} Performance</ModalSubtitle>
        </SubtitleContainer>
      </TitleContnainer>
      <ContentSection>
        <StandingsTableContainer>
          <StandingsTableHeader>
            <StandingsTableTitle>{isTeamModal ? "TEAM'S" : "DRIVER'S"} Season Results</StandingsTableTitle>
          </StandingsTableHeader>
          <StandingsTableContent>
            <ContentHeader>
              <RoundsCell>
                <CellText>Rounds</CellText>
              </RoundsCell>
              <DateCell>
                <CellText>Date</CellText>
              </DateCell>
              <PointsCell>
                <CellText>Points</CellText>
              </PointsCell>
            </ContentHeader>
            {sessionResults &&
              sessionResults.map((res, index) => (
                <div key={index}>
                  <TableRowLink
                    participant={res.roundName}
                    participantCrew={res.raceTrack}
                    points={res.points}
                    time={res.raceDate}
                  />
                  <RowDivider />
                </div>
              ))}
          </StandingsTableContent>
        </StandingsTableContainer>
        <TotalContainer>
          <TotalText>Total Points</TotalText>
          <TotalPointsContainer>
            <TotalPointsText>{totalPointsValue}</TotalPointsText>
          </TotalPointsContainer>
        </TotalContainer>
      </ContentSection>
    </ModalContent>
  );
};

export default StandingsModal;
