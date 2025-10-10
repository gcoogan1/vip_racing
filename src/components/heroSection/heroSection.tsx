import Navbar from "../navbar/navbar";
import { HeroContainer, Content } from "./heroSection.styles";

type HeroSectionProps = {
  backgroundImage: string;
  children?: React.ReactNode;
  large?: boolean;
};

const HeroSection = ({ backgroundImage, children, large }: HeroSectionProps) => {
  return (
    <HeroContainer $background={backgroundImage} $large={large}>
      <Navbar />
      <Content>{children}</Content>
    </HeroContainer>
  );
};

export default HeroSection;
