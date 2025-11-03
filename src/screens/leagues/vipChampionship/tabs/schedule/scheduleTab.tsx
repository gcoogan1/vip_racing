import RaceCard from "../../../../../components/cards/raceCard/raceCard";
import NissanGT3 from "../../../../../assets/car-teams/Nissan-GT-R-NISMO-GT3-18.svg";
import type {
  RaceDay,
  Session,
  SessionSettings,
  Round,
} from "../../../../../types/storeTypes";
import {
  Races,
  RoundSection,
  RoundHeader,
  RoundsList,
  RoundTitle,
  RacesContainer,
} from "./scheduleTab.styles";
import { formatRaceDate } from "../../../../../util/helper/helperFunctions";

type ScheduleTabProps = {
  rounds: Round[];
  raceDays: RaceDay[];
  sessions: Session[];
  sessionSettings: SessionSettings[];
};

const ScheduleTab = ({
  rounds,
  raceDays,
  sessions,
  sessionSettings,
}: ScheduleTabProps) => {

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
                        return (
                          <RaceCard
                            key={session.id}
                            raceNumber={raceDay.race_day_name}
                            raceDate={formatRaceDate(raceDay.race_date)}
                            raceTrack={sessionSetting?.track || "TBD"}
                            raceImage={NissanGT3}
                            settingsOnClick={() => {}}
                            resultsOnClick={() => {}}
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
    </RoundsList>
  );
};

export default ScheduleTab;
