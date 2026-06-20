import Navbar from "../navbar/navbar";
import { HeroContainer, Content, HeroVideo } from "./heroSection.styles";

type HeroSectionProps = {
  backgroundImage: string;
  videoSrc?: string;
  children?: React.ReactNode;
  large?: boolean;
};

const HeroSection = ({ backgroundImage, children, large, videoSrc }: HeroSectionProps) => {
  return (
    <HeroContainer $background={backgroundImage} $large={large}>
      <Navbar />
        {videoSrc && (
        <HeroVideo
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </HeroVideo>
      )}
      <Content>{children}</Content>
    </HeroContainer>
  );
};

export default HeroSection;
