import { useState } from "react";
import { useSelector } from "react-redux";
import { formatRaceDate } from "../../../../../util/helper/helperFunctions";
import { selectRaceDaysGroupedByRound } from "../../../../../store/selectors/raceDaySelectors";
import Modal from "../../../../../components/modal/modal";
import RaceResultModal from "./modals/raceResultModal/raceResultModal";
import RaceCard from "../../../../../components/cards/raceCard/raceCard";
import NissanGT3 from "../../../../../assets/car-teams/Nissan-GT-R-NISMO-GT3-18.svg";
import {
  Races,
  RoundSection,
  RoundHeader,
  RoundsList,
  RoundTitle,
  RacesContainer,
} from "./scheduleTab.styles";

type RaceResultsModal = {
  sessionId: number;
  onClose: () => void;
};

const ScheduleTab = () => {
  const [showRaceResults, setShowRaceResults] = useState(false);
  const [showRaceSettings, setShowRaceSettings] = useState(false);
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
                            raceNumber={raceDay.race_day_name}
                            raceDate={startTime || "TBD"}
                            raceTrack={sessionSetting?.track || "TBD"}
                            raceImage={NissanGT3}
                            settingsOnClick={() => setShowRaceSettings(true)}
                            resultsOnClick={() => {
                              setSelectedRaceResults({
                                sessionId: session.id,
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
            sessionId={selectedRaceResults?.sessionId || 0}
            onClose={() => setShowRaceResults(false)}
          />
        </Modal>
      )}
      {showRaceSettings && (
        <Modal onClose={() => setShowRaceSettings(false)}>
          <h1>Race Settings</h1>
        </Modal>
      )}
    </RoundsList>
  );
};

export default ScheduleTab;
