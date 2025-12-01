import { useState } from "react";
import { useSelector } from "react-redux";
import { toLocalTime } from "../../../../../util/helper/helperFunctions";
import { selectRaceDayLineupDetails } from "../../../../../store/selectors/combinedSelectors";
import { selectDetailedTeamLineups } from "../../../../../store/selectors/teamSelectors";
import TeamCard from "../../../../../components/cards/teamCard/teamCard";
import ParticipantCard from "../../../../../components/cards/participantCard/participantCard";
import TabSwitch from "../../../../../components/tabs/tabSwitch/tabSwitch";
import ShowHideButton from "../../../../../components/showHideButton/showHideButton";
import {
  CardList,
  Heat,
  HeatHeader,
  Heats,
  HeatSubtitle,
  HeatTitle,
  SplitContainer,
  SplitHeader,
  SplitSubtitle,
  SplitTitle,
  SwitchContainer,
  TeamCards,
  TitleContainer,
} from "./lineupTab.styles";
import Modal from "../../../../../components/modal/modal";
import StandingsModal from "../standings/standingsModal/standingsModal";
import RaceResultModal from "../schedule/modals/raceResultModal/raceResultModal";

type ParticipantResults = {
  id: number;
  name: string;
};

type LineupTabProps = {
  leagueName: string;
};

const LineupTab = ({ leagueName }: LineupTabProps) => {
  const [isTeam, setIsTeam] = useState(false);
  const [visibleSplits, setVisibleSplits] = useState<Record<number, boolean>>(
    {}
  );
  const [showDriverResults, setShowDriverResults] =
    useState<ParticipantResults | null>(null);
  const [showSessionResults, setShowSessionResults] = useState<number | null>(
    null
  );
  const [showTeamResults, setShowTeamResults] =
    useState<ParticipantResults | null>(null);

  const tabs = [
    { label: "Teams", active: isTeam, onClick: () => setIsTeam(true) },
    { label: "Drivers", active: !isTeam, onClick: () => setIsTeam(false) },
  ];

  const raceDayLineups = useSelector(selectRaceDayLineupDetails);
  const teamLineupDetails = useSelector(selectDetailedTeamLineups);

  const toggleSplitVisibility = (splitId: number) => {
    setVisibleSplits((prev) => ({
      ...prev,
      [splitId]: !prev[splitId],
    }));
  };

  return (
    <>
      <SwitchContainer>
        <TabSwitch tabs={tabs} />
      </SwitchContainer>

      {isTeam ? (
        <TeamCards>
          {teamLineupDetails.length ? (
            teamLineupDetails.map((tl) => {
              return (
                <TeamCard
                  key={tl.id}
                  teamName={tl.teamName}
                  teamNumber={tl.teamNumber}
                  teamImage={tl.teamImage}
                  teamDrivers={tl.drivers}
                  resultsOnClick={() =>
                    setShowTeamResults({ id: tl.id, name: tl.teamName })
                  }
                />
              );
            })
          ) : (
            <p>No team lineups available.</p>
          )}
        </TeamCards>
      ) : (
        <Heats>
          {raceDayLineups.map((raceDay) => {
            const raceDOW = new Date(raceDay.race_date).toLocaleDateString(
              "en-US",
              { weekday: "long" }
            );

            return (
              <Heat key={raceDay.id}>
                <HeatHeader>
                  <HeatTitle>{`Race Day ${raceDay.id}`}</HeatTitle>
                  <HeatSubtitle>{raceDOW}</HeatSubtitle>
                </HeatHeader>
                {raceDay.splits.map((split) => {
                  const splitTime = split.sessions.find(
                    (sess) => sess.split_id === split.id
                  );
                  const splitLocalTime = splitTime
                    ? toLocalTime(splitTime.start_time ?? undefined)
                    : undefined;
                  return (
                    <SplitContainer key={split.id}>
                      <SplitHeader
                        isHidden={!(visibleSplits[split.id] ?? true)}
                      >
                        <TitleContainer>
                          <SplitTitle>{split.split_name}</SplitTitle>
                          <SplitSubtitle>{splitLocalTime}</SplitSubtitle>
                        </TitleContainer>
                        <ShowHideButton
                          isVisible={visibleSplits[split.id] ?? true}
                          onToggle={() => toggleSplitVisibility(split.id)}
                        />
                      </SplitHeader>
                      {visibleSplits[split.id] ?? true ? (
                        <CardList>
                          {split.driverLineups.length ? (
                            split.driverLineups.map((dl) => {
                              const driverSocials = {
                                twitch:
                                  dl.socials.twitchUsername && dl.socials.twitch
                                    ? {
                                        username: dl.socials.twitchUsername,
                                        url: dl.socials.twitch,
                                      }
                                    : undefined,
                                youtube:
                                  dl.socials.youtubeUsername &&
                                  dl.socials.youtube
                                    ? {
                                        username: dl.socials.youtubeUsername,
                                        url: dl.socials.youtube,
                                      }
                                    : undefined,
                              };

                              return (
                                <ParticipantCard
                                  key={dl.id}
                                  participantNum={dl.lineupNum}
                                  name={dl.name || "Unknown Driver"}
                                  carTeam={dl.team || "Unknown Team"}
                                  crew={dl?.crew}
                                  psnId={dl.psn || ""}
                                  socials={driverSocials}
                                  resultsOnClick={() =>
                                    setShowDriverResults({
                                      id: dl.id,
                                      name: dl.name || "Unknown Driver",
                                    })
                                  }
                                />
                              );
                            })
                          ) : (
                            <p>No driver lineups available for this split.</p>
                          )}
                        </CardList>
                      ) : null}
                    </SplitContainer>
                  );
                })}
              </Heat>
            );
          })}
        </Heats>
      )}
      {showDriverResults && (
        <Modal onClose={() => setShowDriverResults(null)}>
          <StandingsModal
            participantId={showDriverResults.id}
            participantName={showDriverResults.name}
            leagueName={leagueName}
            onSessionClick={(id) => {
              setShowSessionResults(id);
              setShowDriverResults(null);
            }}
          />
        </Modal>
      )}
      {showSessionResults && (
        <Modal onClose={() => setShowSessionResults(null)}>
          <RaceResultModal
            raceDayId={showSessionResults}
            onDriverClick={(id: number, name: string) => {
              setShowDriverResults({ id, name });
              setShowSessionResults(null);
            }}
          />
        </Modal>
      )}
      {showTeamResults && (
        <Modal onClose={() => setShowTeamResults(null)}>
          <StandingsModal
            participantId={showTeamResults.id}
            participantName={showTeamResults.name}
            leagueName={leagueName}
            onSessionClick={(id) => {
              setShowSessionResults(id);
              setShowTeamResults(null);
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default LineupTab;
