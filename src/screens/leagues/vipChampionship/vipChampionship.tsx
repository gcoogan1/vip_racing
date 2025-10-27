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

const tabContentMap = {
  overview: <OverviewTab />,
  lineup: <LineupTab />,
  schedule: <ScheduleTab />,
  standings: <StandingsTab />,
  rules: <RulesTab />,
};

const VipChampionship = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  
  const handleTabChange = (tabId: string) => {
    if (tabId in tabContentMap) {
      setActiveTab(tabId);
    }
  };
  
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
    driverStandings } = fullLeagueData;

  console.log("League Data:", {
    league,
    rounds,
    drivers,
    splits,
    driverStandings
  });

  return (
    <>
      <HeroSection backgroundImage={MclarenDrifting}>
        <HeroTextContainer>
          <HeroTextContent>
            <Title>VIP Championship</Title>
            <Subtitle>
              Experience the ultimate racing league for Gran Turismo 7 featuring
              over 60 drivers partaking in an epic season with 8 thrilling races
              in GT3 cars.
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
