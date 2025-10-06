import Navbar from "../components/navbar/navbar";
import TabMenu from "../components/tabs/tabMenu/tabMenu";

const Home = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <div style={{ width: "100%", margin: "20px", display: "flex", justifyContent: "center" }}>
        <div>
          <TabMenu tabs={[
          { id: "tab1", label: "Tab Link" },
          { id: "tab2", label: "Tab Link" },
          { id: "tab3", label: "Tab Link" },
        ]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
