import VipOverview from "../../../../../assets/leagues/VipOverview.png"
import FeatureCard from "../../../../../components/sectionCards/featureCard/featureCard";
import HondaRacing from "../../../../../assets/leagues/HondaRacing.png";
import SideBySide from "../../../../../assets/leagues/SideBySide.png";
import SubaruRacing from "../../../../../assets/leagues/SubaruRacing.png";
import LexusFerrari from "../../../../../assets/leagues/LexusFerrari.png";
import { Banner, Features } from "./overviewTab.styles";

const OverviewTab = () => {
  return (
    <>

      <Banner src={VipOverview} alt="Banner Image" />
      <Features>
          <FeatureCard side={"right"} title={"Group 3 Unleashed"} info={"Fight through 8 unrelenting races in Group 3 cars inspired by real GT3 series. Make sure to pick your most flexible car to tackle any track."} imageSrc={HondaRacing} imgAlt={"Honda Racing"} />
          <FeatureCard side={"left"} title={"Strength in Numbers"} info={"Team up in a group of 3 and select one of the Gr.3 cars to fight with for the entire season. Earn points for yourself and your manufacturer to take the win."} imageSrc={SubaruRacing} imgAlt={"Subaru Racing"} />
          <FeatureCard side={"right"} title={"One Championship"} info={"All drivers compete in the same division, which is divided into 2 heats: Wednesday and Saturday. Each heat has 2 splits of 15 drivers that run consecutively."} imageSrc={LexusFerrari} imgAlt={"Lexus and Ferrari racing"} />
          <FeatureCard side={"left"} title={"Respectful Racing"} info={"Sportsmanship and respect among competitors is at the core of the league. Each race is governed by rules to ensure clean driving and fair penalties."} imageSrc={SideBySide} imgAlt={"Racing cars side by side in race"} />
      </Features>
    </>
    
  )
}

export default OverviewTab;