import { useState } from "react";
import { useSelector } from "react-redux";
import { formatRaceDate } from "../../../../../util/helper/helperFunctions";
import { selectRaceDaysGroupedByRound } from "../../../../../store/selectors/raceDaySelectors";
import Modal from "../../../../../components/modal/modal";
import RaceResultModal from "./modals/raceResultModal/raceResultModal";
import RaceCard from "../../../../../components/cards/raceCard/raceCard";
import Unknown from "../../../../../assets/unknown.png";
import {
  Races,
  RoundSection,
  RoundHeader,
  RoundsList,
  RoundTitle,
  RacesContainer,
  RoundSubtitle,
} from "./scheduleTab.styles";
import StandingsModal from "../standings/standingsModal/standingsModal";
import SettingsModal from "./modals/settingsModal/settingsModal";


type RaceResultsModal = {
  sessionId: number;
  raceDayId: number;
  onClose: () => void;
};

type DriverResults = {
  driverId: number;
  driverName: string;
};

type ScheduleTabProps = {
  leagueName: string;
};

const ScheduleTab = ({ leagueName }: ScheduleTabProps) => {
  const [showRaceResults, setShowRaceResults] = useState(false);
  const [showRaceSettings, setShowRaceSettings] = useState<number | null>(null);
  const [showDriverResults, setShowDriverResults] = useState<DriverResults | null>(null);
  const [showSessionResults, setShowSessionResults] = useState<number | null>(
    null
  );
  const [selectedRaceResults, setSelectedRaceResults] =
    useState<RaceResultsModal | null>(null);

  const raceDaysByRound = useSelector(selectRaceDaysGroupedByRound);

  return (
    <RoundsList>
      {raceDaysByRound.map((raceDayGroup) => {
        return (
          <RoundSection key={raceDayGroup.id}>
            <RoundHeader isHidden={raceDayGroup.raceDays.length === 0}>
              <RoundTitle>{raceDayGroup.round_name}</RoundTitle>
              <RoundSubtitle>PRESENTED BY DA_CRAWL3R</RoundSubtitle>
            </RoundHeader>
            {raceDayGroup.raceDays.length > 0 && (
              <RacesContainer>
                {raceDayGroup.raceDays.map((raceDay) => {
                  return (
                    <Races key={raceDay.id}>
                      {raceDay.sessions.map((session) => {
                        const sessionSetting = raceDay.sessionSettings.find(
                          (ss) => ss.session_id === session.id
                        );

                        const startTime =
                          session.start_time &&
                          formatRaceDate(session.start_time);

                        return (
                          <RaceCard
                            key={session.id}
                            raceNumber={session.session_name || "TBD"}
                            raceDate={startTime || "TBD"}
                            raceTrack={sessionSetting?.track || "TBD"}
                            raceImage={sessionSetting?.car_img_url || Unknown}
                            settingsOnClick={() => setShowRaceSettings(session.id)}
                            showNoCars={sessionSetting?.show_no_cars || false}
                            noResults
                            resultsOnClick={() => {
                              setSelectedRaceResults({
                                sessionId: session.id,
                                raceDayId: raceDay.id,
                                onClose: () => setShowRaceResults(false),
                              });
                              setShowRaceResults(true);
                            }}
                          />
                        );
                      })}
                    </Races>
                  );
                })}
              </RacesContainer>
            )}
          </RoundSection>
        );
      })}
      {showRaceResults && (
        <Modal onClose={() => setShowRaceResults(false)}>
          <RaceResultModal
            raceDayId={selectedRaceResults?.raceDayId || showSessionResults || 0}
            onDriverClick={(driverId: number, driverName: string) => {
              setShowDriverResults({ driverId, driverName });
              setShowRaceResults(false);
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
              setShowRaceResults(true);
              setShowDriverResults(null);
              setSelectedRaceResults(null);
            }}
          />
        </Modal>
      )}
      {showRaceSettings && (
        <Modal onClose={() => setShowRaceSettings(null)}>
          <SettingsModal sessionId={showRaceSettings} />
        </Modal>
      )}
    </RoundsList>
  );
};

export default ScheduleTab;
