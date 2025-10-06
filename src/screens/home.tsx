
import Navbar from "../components/navbar/navbar";
import SocialLink from "../components/socialLink/socialLink";
import Youtube from "../assets/SocialYoutube.svg?react";
import Twitch from "../assets/SocialTwitch.svg?react";

const Home = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <div style={{ width: "100%", margin: "20px", display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <SocialLink href="https://www.youtube.com/@vipracingllc" icon={<Youtube width={20} height={20} />} label="@username" />
          <SocialLink href="https://www.twitch.tv/vipracingllc" icon={<Twitch width={20} height={20} />} label="@username" />
        </div>
      </div>
    </div>
  );
};

export default Home;
