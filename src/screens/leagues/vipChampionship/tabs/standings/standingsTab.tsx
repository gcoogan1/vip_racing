import { useState } from "react";
import TabSwitch from "../../../../../components/tabs/tabSwitch/tabSwitch";
import type {
  Driver,
  DriverStandings,
  RaceDay,
  Round,
  Session,
  SessionSettings,
  Team,
  TeamStandings,
} from "../../../../../types/storeTypes";
import { getTotalPoints } from "../../../../../util/helper/helperFunctions";
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
import TableRowLink from "../../../../../components/tableRowLink/tableRowLink";
import Modal from "../../../../../components/modal/modal";
import StandingsModal from "./standingsModal/standingsModal";

type StandingsTabProps = {
  allTeamStandings: TeamStandings[];
  allDriverStandings: DriverStandings[];
  teams: Team[];
  drivers: Driver[];
  rounds: Round[];
  raceDays: RaceDay[];
  sessions: Session[];
  sessionSettings: SessionSettings[];
  leagueName: string;
};

const StandingsTab = ({
  allTeamStandings,
  allDriverStandings,
  teams,
  drivers,
  rounds,
  raceDays,
  sessions,
  sessionSettings,
  leagueName
}: StandingsTabProps) => {
  const [isTeam, setIsTeam] = useState(true);
  const [selectedModal, setSelectedModal] = useState<Driver | Team | null>(
    null
  );

  const teamTotals = teams.map((team) => {
    const totalPoints = getTotalPoints(team.id, "team", allTeamStandings);
    return {
      teamId: team.id,
      teamName: team.team_name,
      totalPoints,
    };
  });

  const driverTotals = drivers.map((driver) => {
    const totalPoints = getTotalPoints(driver.id, "driver", allDriverStandings);
    const driverTeam = teams.find((team) => team.id === driver.team_id);
    return {
      driverId: driver.id,
      driverName: driver.name,
      driverCrew: driver.crew,
      driverTeam: driverTeam?.team_name,
      totalPoints,
    };
  });

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
                    participant={teamTotal.teamName}
                    points={teamTotal.totalPoints}
                    onClick={() => {
                      const selectedTeam = teams.find(
                        (team) => team.id === teamTotal.teamId
                      );
                      if (selectedTeam) {
                        console.log("selectedTeam: ", selectedTeam);
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
                    participant={driverTotal.driverName}
                    participantCrew={driverTotal.driverCrew}
                    driverTeam={driverTotal.driverTeam}
                    points={driverTotal.totalPoints}
                    onClick={() => {
                      const selectedDriver = drivers.find(
                        (driver) => driver.id === driverTotal.driverId
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
            rounds={rounds}
            raceDays={raceDays}
            sessions={sessions}
            sessionSettings={sessionSettings}
            allTeamStandings={allTeamStandings}
            allDriverStandings={allDriverStandings}
          />
        </Modal>
      )}
    </>
  );
};

export default StandingsTab;
