import Navbar from "../components/navbar/navbar";
import TabButton from "../components/tabs/tabButton/tabButton";

const Home = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <div style={{ width: "100%", margin: "20px", display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <TabButton label="Label" onClick={() => { } } active={false} />
          <TabButton label="Label" onClick={() => { } } active={true} />
          <TabButton label="Label" onClick={() => { } } isDisabled  />
        </div>
      </div>
    </div>
  );
};

export default Home;
