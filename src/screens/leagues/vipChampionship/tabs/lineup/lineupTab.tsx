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

const LineupTab = () => {
  const [isTeam, setIsTeam] = useState(false);
  const [visibleSplits, setVisibleSplits] = useState<Record<number, boolean>>(
    {}
  );

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
                  isDisabled
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
    </>
  );
};

export default LineupTab;
