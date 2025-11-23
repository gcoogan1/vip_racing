import RaceCard from "../../../../../components/cards/raceCard/raceCard";
import NissanGT3 from "../../../../../assets/car-teams/Nissan-GT-R-NISMO-GT3-18.svg";
import type {
  RaceDay,
  Session,
  SessionSettings,
  Round,
  DriverStandings,
  Driver,
  Team,
} from "../../../../../types/storeTypes";
import {
  Races,
  RoundSection,
  RoundHeader,
  RoundsList,
  RoundTitle,
  RacesContainer,
} from "./scheduleTab.styles";
import {
  formatRaceDate,
  getRaceResults,
} from "../../../../../util/helper/helperFunctions";
import { useState } from "react";
import Modal from "../../../../../components/modal/modal";


type ScheduleTabProps = {
  rounds: Round[];
  raceDays: RaceDay[];
  sessions: Session[];
  drivers: Driver[];
  teams: Team[];
  allDriverStandings: DriverStandings[];
  sessionSettings: SessionSettings[];
};

type RaceResultItem = {
  points: number;
  time: string;
  driverName: string;
  driverTeamName: string;
  driverTeamLogo: string;
  driverCrew?: string;
};

type RaceResultsModal = {
  raceResults: RaceResultItem[];
  onClose: () => void;
  raceNumber: string;
  raceDate: string;
  raceTrack: string;
};

const ScheduleTab = ({
  rounds,
  raceDays,
  sessions,
  drivers,
  teams,
  allDriverStandings,
  sessionSettings,
}: ScheduleTabProps) => {
  const [showRaceResults, setShowRaceResults] = useState(false);
  const [showRaceSettings, setShowRaceSettings] = useState(false);
  const [selectedRaceResults, setSelectedRaceResults] = useState<RaceResultsModal>({} as RaceResultsModal);



  return (
    <RoundsList>
      {rounds.map((round) => {
        const roundRaceDays = raceDays.filter((rd) => rd.round_id === round.id);
        return (
          <RoundSection key={round.id}>
            <RoundHeader isHidden={roundRaceDays.length === 0}>
              <RoundTitle>{round.round_name}</RoundTitle>
            </RoundHeader>
            {roundRaceDays.length > 0 && (
              <RacesContainer>
                {roundRaceDays.map((raceDay) => {
                  const raceDaySessions = sessions.filter(
                    (s) => s.race_day_id === raceDay.id
                  );
                  const raceDaySessionSettings = sessionSettings.filter((ss) =>
                    raceDaySessions.some((s) => s.id === ss.session_id)
                  );

                  return (
                    <Races key={raceDay.id}>
                      {raceDaySessions.map((session) => {
                        const sessionSetting = raceDaySessionSettings.find(
                          (ss) => ss.session_id === session.id
                        );

                        const raceResults = getRaceResults(
                          session.id,
                          allDriverStandings,
                          drivers,
                          teams
                        );
                        

                        console.log("raceResults", raceResults);
                        console.log("race day", raceDay);
                        console.log("sessionSetting", sessionSetting);
                        console.log("session", session);
                        return (
                          <RaceCard
                            key={session.id}
                            raceNumber={raceDay.race_day_name}
                            raceDate={formatRaceDate(raceDay.race_date)}
                            raceTrack={sessionSetting?.track || "TBD"}
                            raceImage={NissanGT3}
                            settingsOnClick={() => setShowRaceSettings(true)}
                            resultsOnClick={() => {
                              setSelectedRaceResults({
                                ...raceResults,
                                raceNumber: raceDay.race_day_name,
                                raceDate: formatRaceDate(raceDay.race_date),
                                raceTrack: sessionSetting?.track || "TBD",
                                raceResults: [],
                                onClose: () => setShowRaceResults(false)
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
          <h1>{selectedRaceResults?.raceNumber}</h1>
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
