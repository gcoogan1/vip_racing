import CloseButton from "../components/closeButton/closeButton";
import Navbar from "../components/navbar/navbar";

const Home = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <div style={{ width: "100%", margin: "20px", display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <CloseButton onClick={() => { }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
