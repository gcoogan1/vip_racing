import Navbar from "../components/navbar/navbar/navbar";
import ArrowRight from "../assets/icon/ArrowRight.svg?react";
import Button from "../components/button/button";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Button
        label="Click Me"
        onClick={() => console.log("Button clicked")}
        icon={<ArrowRight width={16} height={16} />}
      />
    </div>
  );
};

export default Home;
