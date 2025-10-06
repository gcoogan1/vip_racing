
import Navbar from "../components/navbar/navbar";
import SocialLink from "../components/socialLink/socialLink";
import Youtube from "../assets/SocialYoutube.svg?react";
import Twitch from "../assets/SocialTwitch.svg?react";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <SocialLink href="https://www.youtube.com/@vipracingllc" icon={<Youtube width={20} height={20} />} label="@username" />
          <SocialLink href="https://www.twitch.tv/vipracingllc" icon={<Twitch width={20} height={20} />} label="@username" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
