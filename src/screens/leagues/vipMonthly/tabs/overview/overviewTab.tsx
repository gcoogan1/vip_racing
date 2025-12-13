import VipOverview from "../../../../../assets/leagues/2026Overview.png";
import {
  Banner,
} from "./overviewTab.styles";


const OverviewTab = () => {

  return (
    <>
      <Banner loading="lazy" src={VipOverview} alt="Banner Image" />
    </>
  );
};

export default OverviewTab;