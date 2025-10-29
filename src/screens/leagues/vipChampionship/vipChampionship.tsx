import { useEffect, useState } from "react";
import HeroSection from "../../../components/heroSection/heroSection";
import MclarenDrifting from "../../../assets/hero/MclarenDrifting.jpg";
import TabButton from "../../../components/tabs/tabButton/tabButton";
import Registration from "../../../components/sectionCards/registration/registration";
import TabMenu from "../../../components/tabs/tabMenu/tabMenu";
import LineupTab from "./tabs/lineup/lineupTab";
import OverviewTab from "./tabs/overview/overviewTab";
import RulesTab from "./tabs/rules/rulesTab";
import ScheduleTab from "./tabs/schedule/scheduleTab";
import StandingsTab from "./tabs/standings/standingsTab";
import {
  ButtonsContainer,
  HeroTextContainer,
  HeroTextContent,
  SectionContainer,
  SectionContent,
  Subtitle,
  TabContents,
  TabsContainer,
  Title,
} from "../league.styles";
import { fetchAllLeagueData } from "../../../store/fetchAllLeagueDataThunk";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../../store";
import { selectFullLeagueData } from "../../../store/fullLeagueDataSelector";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "lineup", label: "Lineup" },
  { id: "schedule", label: "Schedule" },
  { id: "standings", label: "Standings" },
  { id: "rules", label: "Rules" },
];

const VipChampionship = () => {
  const [activeTab, setActiveTab] = useState<string>("schedule");
  
  
  const dispatch = useDispatch<AppDispatch>();
  const leagueId = 1;
  const fullLeagueData = useSelector(selectFullLeagueData(leagueId));
  
  useEffect(() => {
    // Only fetch once when homepage mounts
    if (!fullLeagueData) {
      dispatch(fetchAllLeagueData(leagueId));
    }
  }, [dispatch, leagueId, fullLeagueData]);
  
  if (!fullLeagueData) {
    return <div>Loading...</div>;
  }
  
  const { league, 
    rounds, 
    drivers, 
    splits, 
    teamLineups,
    driverLineups,
    raceDays,
    teams,
    sessions,
    sessionSettings
  } = fullLeagueData;
    
    console.log("League Data:", {
      league,
      rounds,
      drivers,
      splits,
    });

    const tabContentMap = {
      overview: <OverviewTab />,
      lineup: <LineupTab raceDays={raceDays} teamLineups={teamLineups} driverLineups={driverLineups} teams={teams} drivers={drivers} splits={splits} sessions={sessions} />,
      schedule: <ScheduleTab rounds={rounds} raceDays={raceDays} sessions={sessions} sessionSettings={sessionSettings} />,
      standings: <StandingsTab />,
      rules: <RulesTab />,
    };

    const handleTabChange = (tabId: string) => {
      if (tabId in tabContentMap) {
        setActiveTab(tabId);
      }
    };
    
    return (
      <>
      <HeroSection backgroundImage={MclarenDrifting}>
        <HeroTextContainer>
          <HeroTextContent>
            <Title>{league.name}</Title>
            <Subtitle>
              {league.description}
            </Subtitle>
          </HeroTextContent>
        </HeroTextContainer>
      </HeroSection>
      <SectionContainer>
        <SectionContent>
          <ButtonsContainer>
            <TabButton active label="2026" />
            <TabButton isDisabled label="2027" />
            <TabButton isDisabled label="2028" />
          </ButtonsContainer>
          <Registration />
          <TabsContainer>
            <TabMenu
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
            <TabContents>
              {tabContentMap[activeTab as keyof typeof tabContentMap]}
            </TabContents>
          </TabsContainer>
        </SectionContent>
      </SectionContainer>
    </>
  );
};

export default VipChampionship;
