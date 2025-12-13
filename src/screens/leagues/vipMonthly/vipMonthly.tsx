import { useEffect, useState } from "react";
import HeroSection from "../../../components/heroSection/heroSection";
import VipRacingSideBySide from "../../../assets/hero/VipRacingSideBySide.jpg";
import TabButton from "../../../components/tabs/tabButton/tabButton";
import TabMenu from "../../../components/tabs/tabMenu/tabMenu";
import OverviewTab from "./tabs/overview/overviewTab";
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
import { selectFullLeagueData } from "../../../store/selectors/fullLeagueDataSelector";
import LoadingScreen from "../../loading/loadingScreen";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "schedule", label: "Schedule" },
  { id: "standings", label: "Standings" },
];

const VipMonthly = () => {
  const [activeTab, setActiveTab] = useState<string>("schedule");


  const dispatch = useDispatch<AppDispatch>();
  const leagueId = 2;
  const fullLeagueData = useSelector(selectFullLeagueData(leagueId));

  useEffect(() => {
    // Only fetch once when homepage mounts
    if (!fullLeagueData) {
      dispatch(fetchAllLeagueData(leagueId));
    }
  }, [dispatch, leagueId, fullLeagueData]);

  if (!fullLeagueData) {
    return <LoadingScreen />;
  }
  
  const {
    league,
    drivers,
    teams,
  } = fullLeagueData;


  const tabContentMap = {
    overview: <OverviewTab />,
    schedule: (
      <ScheduleTab leagueName={league.name || "League"} />
    ),
    standings: (
      <StandingsTab
        teams={teams}
        drivers={drivers}
        leagueName={league.name || "League"}
      />
    ),
  };

  const handleTabChange = (tabId: string) => {
    if (tabId in tabContentMap) {
      setActiveTab(tabId);
    }
  };

  return (
    <>
      <HeroSection backgroundImage={VipRacingSideBySide}>
        <HeroTextContainer>
          <HeroTextContent>
            <Title>{league.name}</Title>
            <Subtitle>{league.description}</Subtitle>
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

export default VipMonthly;
