import Navbar from "../navbar/navbar";
import { HeroContainer, Content } from "./heroSection.styles";

type HeroSectionProps = {
  backgroundImage: string;
  children?: React.ReactNode;
};

const HeroSection = ({ backgroundImage, children }: HeroSectionProps) => {
  return (
    <HeroContainer $background={backgroundImage}>

      <Navbar />
      <Content>{children}</Content>
    </HeroContainer>
  );
};

export default HeroSection;
