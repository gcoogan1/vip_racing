import { useState, useMemo } from "react";
import TabSwitch from "../../../../../components/tabs/tabSwitch/tabSwitch";
import type {
  DriverLineup,
  Team,
  TeamLineup,
  Driver,
  RaceDay,
  Split,
  Session,
} from "../../../../../types/storeTypes";
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
import TeamCard from "../../../../../components/cards/teamCard/teamCard";
import ParticipantCard from "../../../../../components/cards/participantCard/participantCard";
import { toLocalTime } from "../../../../../util/helper/helperFunctions";
import ShowHideButton from "../../../../../components/showHideButton/showHideButton";

type LineupTabProps = {
  teamLineups: TeamLineup[];
  teams: Team[];
  drivers: Driver[];
  driverLineups: DriverLineup[];
  raceDays: RaceDay[];
  splits: Split[];
  sessions: Session[];
};

const LineupTab = ({
  teamLineups,
  teams,
  driverLineups,
  drivers,
  raceDays,
  splits,
  sessions,
}: LineupTabProps) => {
  const [isTeam, setIsTeam] = useState(false);
  const [visibleSplits, setVisibleSplits] = useState<Record<number, boolean>>(
    {}
  );

  const tabs = [
    { label: "Teams", active: isTeam, onClick: () => setIsTeam(true) },
    { label: "Drivers", active: !isTeam, onClick: () => setIsTeam(false) },
  ];

  // Match drivers to their teams
  const teamDriversMap = useMemo(() => {
    // Create an object of team_id to drivers.
    // Ex. { 1: [driver1, driver2], 2: [driver3] } -> KEY: team_id, VALUE: drivers array
    const map: Record<number, Driver[]> = {};
    for (const driver of drivers) {
      // If this team doesn't exist yet in the map, create an empty array for it
      if (!map[driver.team_id]) map[driver.team_id] = [];
      // Add the driver to their team's array
      map[driver.team_id].push(driver);
    }
    // Return the completed map
    return map;
  }, [drivers]);

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
          {teamLineups.length ? (
            teamLineups.map((tl) => {
              const team = teams.find((t) => t.id === tl.team_id);
              if (!team) return null;

              // Get drivers for this team
              const teamDrivers = teamDriversMap[team.id] || [];

              return (
                <TeamCard
                  key={tl.id}
                  teamName={team.team_name}
                  teamNumber={tl.lineup_num}
                  teamImage={team.team_logo}
                  teamDrivers={teamDrivers.map((d) => d.name)}
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
          {raceDays.map((raceDay) => {
            const raceDOW = new Date(raceDay.race_date).toLocaleDateString(
              "en-US",
              { weekday: "long" }
            );
            const raceSplits = splits.filter(
              (s) => s.race_day_id === raceDay.id
            );

            return (
              <Heat key={raceDay.id}>
                <HeatHeader>
                  <HeatTitle>{`Race Day ${raceDay.id}`}</HeatTitle>
                  <HeatSubtitle>{raceDOW}</HeatSubtitle>
                </HeatHeader>
                {raceSplits.map((split) => {
                  const splitTime = sessions.find(
                    (session) => session.split_id === split.id
                  );
                  const splitLocalTime = splitTime
                    ? toLocalTime(splitTime.start_time ?? undefined)
                    : undefined;
                  const splitDriverLineups = driverLineups.filter(
                    (dl) => dl.split_id === split.id
                  );

                  return (
                    <SplitContainer key={split.id}>
                      <SplitHeader isHidden={!(visibleSplits[split.id] ?? true)}>
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
                          {splitDriverLineups.length ? (
                            splitDriverLineups.map((dl) => {
                              const driver = drivers.find(
                                (d) => d.id === dl.driver_id
                              );
                              const team = teams.find(
                                (t) => t.id === driver?.team_id
                              );
                              if (!driver || !team) return null;

                              const driverSocials = {
                                twitch:
                                  driver.twitch_username && driver.twitch_link
                                    ? {
                                        username: driver.twitch_username,
                                        url: driver.twitch_link,
                                      }
                                    : undefined,
                                youtube:
                                  driver.youtube_username && driver.youtube_link
                                    ? {
                                        username: driver.youtube_username,
                                        url: driver.youtube_link,
                                      }
                                    : undefined,
                              };

                              return (
                                <ParticipantCard
                                  key={dl.id}
                                  participantNum={dl.lineup_num}
                                  name={driver?.name}
                                  carTeam={team?.team_name}
                                  crew={driver?.crew}
                                  psnId={driver?.psn_id}
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
