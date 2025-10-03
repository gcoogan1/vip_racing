import NavbarLink from "../components/navbar/navbarLink/navbarLink";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <NavbarLink label="Drivers" to="/drivers" />
      <NavbarLink label="Media" to="/media" />
      <NavbarLink label="Shop" to="/shop" />
    </div>
  );
};

export default Home;
