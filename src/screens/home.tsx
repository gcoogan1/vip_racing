
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import DriverCard from "../components/cards/driverCard/driverCard";
import { drivers } from "../util/data/drivers/drivers";

const driver1 = drivers[0];

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingBottom: "200px" }}>
        <div style={{ display: "flex", width: "400px" }}>
          <DriverCard {...driver1} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
