import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllDriverInfo } from "../../../../../store/selectors/combinedSelectors";
import { selectAllTeamInfo } from "../../../../../store/selectors/teamSelectors";
import type { Driver, Team } from "../../../../../types/storeTypes";
import StandingsModal from "./standingsModal/standingsModal";
import TabSwitch from "../../../../../components/tabs/tabSwitch/tabSwitch";
import TableRowLink from "../../../../../components/tableRowLink/tableRowLink";
import Modal from "../../../../../components/modal/modal";
import {
  CellText,
  ContentHeader,
  ParticipantCell,
  PointsCell,
  PositionCell,
  RowDivider,
  StandingsTableContainer,
  StandingsTableContent,
  StandingsTableHeader,
  StandingsTableTitle,
  SwitchContainer,
  TeamCell,
} from "./standingsTab.styles";
import RaceResultModal from "../schedule/modals/raceResultModal/raceResultModal";

type DriverResults = {
  driverId: number;
  driverName: string;
};

type StandingsTabProps = {
  teams: Team[];
  drivers: Driver[];
  leagueName: string;
};

const StandingsTab = ({ teams, drivers, leagueName }: StandingsTabProps) => {
  const [isTeam, setIsTeam] = useState(true);
  const [selectedModal, setSelectedModal] = useState<Driver | Team | null>(
    null
  );
  const [showSessionResults, setShowSessionResults] = useState<number | null>(
    null
  );
  const [showDriverResults, setShowDriverResults] =
    useState<DriverResults | null>(null);

  const driverTotals = useSelector(selectAllDriverInfo);
  const teamTotals = useSelector(selectAllTeamInfo);

  const tabs = [
    { label: "Teams", active: isTeam, onClick: () => setIsTeam(true) },
    { label: "Drivers", active: !isTeam, onClick: () => setIsTeam(false) },
  ];

  return (
    <>
      <SwitchContainer>
        <TabSwitch tabs={tabs} />
      </SwitchContainer>

      {isTeam ? (
        <StandingsTableContainer>
          <StandingsTableHeader>
            <StandingsTableTitle>
              Team’s Total season points
            </StandingsTableTitle>
          </StandingsTableHeader>
          <StandingsTableContent>
            <ContentHeader>
              <PositionCell>
                <CellText>P</CellText>
              </PositionCell>
              <ParticipantCell>
                <CellText>Team</CellText>
              </ParticipantCell>
              <PointsCell>
                <CellText>Points</CellText>
              </PointsCell>
            </ContentHeader>
            {teamTotals
              .sort((a, b) => b.totalPoints - a.totalPoints)
              .map((teamTotal, index) => (
                <div key={index}>
                  <TableRowLink
                    rank={index + 1}
                    participant={teamTotal.team_name}
                    points={teamTotal.totalPoints}
                    onClick={() => {
                      const selectedTeam = teams.find(
                        (team) => team.id === teamTotal.id
                      );
                      if (selectedTeam) {
                        setSelectedModal(selectedTeam);
                      }
                    }}
                  />
                  <RowDivider />
                </div>
              ))}
          </StandingsTableContent>
        </StandingsTableContainer>
      ) : (
        <StandingsTableContainer>
          <StandingsTableHeader>
            <StandingsTableTitle>
              Driver’s Total season points
            </StandingsTableTitle>
          </StandingsTableHeader>
          <StandingsTableContent>
            <ContentHeader>
              <PositionCell>
                <CellText>P</CellText>
              </PositionCell>
              <ParticipantCell>
                <CellText>Driver</CellText>
              </ParticipantCell>
              <TeamCell>
                <CellText>Team</CellText>
              </TeamCell>
              <PointsCell>
                <CellText>Points</CellText>
              </PointsCell>
            </ContentHeader>
            {driverTotals
              .sort((a, b) => b.totalPoints - a.totalPoints)
              .map((driverTotal, index) => (
                <div key={index}>
                  <TableRowLink
                    rank={index + 1}
                    participant={driverTotal.name}
                    participantCrew={driverTotal.crew}
                    driverTeam={driverTotal.teamName}
                    points={driverTotal.totalPoints}
                    onClick={() => {
                      const selectedDriver = drivers.find(
                        (driver) => driver.id === driverTotal.id
                      );
                      if (selectedDriver) {
                        setSelectedModal(selectedDriver);
                      }
                    }}
                  />
                  <RowDivider />
                </div>
              ))}
          </StandingsTableContent>
        </StandingsTableContainer>
      )}
      {selectedModal && (
        <Modal onClose={() => setSelectedModal(null)}>
          <StandingsModal
            leagueName={leagueName}
            selectedModal={selectedModal}
            onSessionClick={(sessionId: number) => {
              setShowSessionResults(sessionId);
              setSelectedModal(null);
            }}
          />
        </Modal>
      )}
      {showSessionResults && (
        <Modal onClose={() => setShowSessionResults(null)}>
          <RaceResultModal
            raceDayId={showSessionResults}
            onDriverClick={(driverId: number, driverName: string) => {
              setShowDriverResults({ driverId, driverName });
              setShowSessionResults(null);
            }}
          />
        </Modal>
      )}
      {showDriverResults && (
        <Modal onClose={() => setShowDriverResults(null)}>
          <StandingsModal
            participantId={showDriverResults.driverId}
            participantName={showDriverResults.driverName}
            leagueName={leagueName}
            onSessionClick={(sessionId: number) => {
              setShowSessionResults(sessionId);
              setShowDriverResults(null);
              setSelectedModal(null);
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default StandingsTab;
