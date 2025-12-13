import { useSelector } from "react-redux";
import TableRowLink from "../../../../../../components/tableRowLink/tableRowLink";
import type {
  Driver,
  Team,
} from "../../../../../../types/storeTypes";
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
import { selectParticipantSessionResults } from "../../../../../../store/selectors/sessionSelectors";


type StandingsModalProps = {
  selectedModal?: Driver | Team;
  participantId?: number;
  participantName?: string;
  onSessionClick?: (sessionId: number) => void;
  leagueName: string;
};

const StandingsModal = ({
  selectedModal,
  participantId,
  participantName,
  onSessionClick,
  leagueName,
}: StandingsModalProps) => {
  const isTeamModal = selectedModal && "team_name" in selectedModal;

  const name = isTeamModal
    ? selectedModal.team_name
    : selectedModal
    ? selectedModal.name
    : "";

  const sessionResults = useSelector(
    selectParticipantSessionResults(
      selectedModal?.id || participantId || 0,
      isTeamModal ? "team" : "driver"
    )
  );

  const getTotalPoints = () => {
    return sessionResults.reduce((acc, curr) => acc + (curr?.points || 0), 0);
  };
  const totalPointsValue = getTotalPoints();

  return (
    <ModalContent onClick={e => e.stopPropagation()}>
      <TitleContnainer>
        <ModalTitle>{name || participantName}</ModalTitle>
        <SubtitleContainer>
          <ModalSubtitleColor>{leagueName}</ModalSubtitleColor>
          <ModalSubtitle>
            {isTeamModal ? "Team" : "Driver"} Performance
          </ModalSubtitle>
        </SubtitleContainer>
      </TitleContnainer>
      <ContentSection>
        <StandingsTableContainer>
          <StandingsTableHeader>
            <StandingsTableTitle>
              {isTeamModal ? "TEAM'S" : "DRIVER'S"} Season Results
            </StandingsTableTitle>
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
                    participant={res?.roundName || ""}
                    participantCrew={res?.raceTrack || ""}
                    points={res?.points || 0}
                    time={res?.raceDate || ""}
                    onClick={() => {
  
                      if (onSessionClick && res?.raceDayId) {
                        onSessionClick(res?.raceDayId);
                      }
                    }}
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
