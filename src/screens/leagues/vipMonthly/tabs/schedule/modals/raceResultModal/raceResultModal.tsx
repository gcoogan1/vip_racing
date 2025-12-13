import { useSelector } from "react-redux";
import { selectRaceDayWithAllDetails } from "../../../../../../../store/selectors/raceDaySelectors";
import {
  CellText,
  ContentHeader,
  ContentSection,
  DriverCell,
  ModalContent,
  ModalSubtitle,
  ModalSubtitleColor,
  ModalTitle,
  PointsCell,
  PositionCell,
  ResultTableContainer,
  ResultTableContent,
  ResultTableHeader,
  ResultTableTitle,
  RowDivider,
  SubtitleContainer,
  TeamCell,
  TimeCell,
  TitleContainer,
} from "./raceResultModal.styles";
import { formatRaceDate } from "../../../../../../../util/helper/helperFunctions";
import { useState } from "react";
import TabSwitch from "../../../../../../../components/tabs/tabSwitch/tabSwitch";
import TableRowLink from "../../../../../../../components/tableRowLink/tableRowLink";

type RaceResultModalProps = {
  raceDayId: number;
  onDriverClick?: (driverId: number, driverName: string) => void;
};

const RaceResultModal = ({ raceDayId, onDriverClick }: RaceResultModalProps) => {
  const [activeSplitIndex, setActiveSplitIndex] = useState(0);
  const raceDayResults = useSelector(selectRaceDayWithAllDetails(raceDayId));

  const splits = raceDayResults?.splits || [];
  const splitTabs = splits.map((split, index) => ({
    label: split.splitName,
    active: activeSplitIndex === index,
    onClick: () => setActiveSplitIndex(index),
  }));

  const activeSplit = splits[activeSplitIndex];
  const splitDateTime = activeSplit?.session?.startTime


  return (
    <ModalContent>
      <TitleContainer>
        <SubtitleContainer>
          <ModalSubtitleColor>{raceDayResults?.raceDayName}</ModalSubtitleColor>
          <ModalSubtitle>
            {formatRaceDate(splitDateTime || "")}
          </ModalSubtitle>
        </SubtitleContainer>
        <ModalTitle>{raceDayResults?.splits[0].session?.track}</ModalTitle>
      </TitleContainer>
      <ContentSection>
        <TabSwitch tabs={splitTabs} />

        {activeSplit && (
          <ResultTableContainer>
            <ResultTableHeader>
              <ResultTableTitle>{activeSplit.session?.type}</ResultTableTitle>
            </ResultTableHeader>
            <ResultTableContent>
              <ContentHeader>
                <PositionCell>
                  <CellText>P</CellText>
                </PositionCell>
                <DriverCell>
                  <CellText>Driver</CellText>
                </DriverCell>
                <TeamCell>
                  <CellText>Team</CellText>
                </TeamCell>
                <TimeCell>
                  <CellText>Time</CellText>
                </TimeCell>
                <PointsCell>
                  <CellText>Points</CellText>
                </PointsCell>
              </ContentHeader>
              {activeSplit.drivers.map((driver, index) => (
                <div key={index}>
                  <TableRowLink
                    rank={index + 1}
                    participant={driver.name}
                    participantCrew={driver.crew}
                    driverTeam={driver.teamName}
                    points={driver.points}
                    time={driver.time}
                    onClick={() => {
                      if (onDriverClick) {
                        onDriverClick(driver.driverId, driver.name);
                      }
                    }}
                  />
                  <RowDivider />
                </div>
              ))} 
            </ResultTableContent>
          </ResultTableContainer>
        )}
      </ContentSection>
    </ModalContent>
  );
};

export default RaceResultModal;
