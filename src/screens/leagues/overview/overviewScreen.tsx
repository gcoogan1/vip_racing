import HeroSection from "../../../components/heroSection/heroSection";
import MclarenDrifting from "../../../assets/hero/MclarenDrifting.jpg";
import {
  ButtonsContainer,
  HeroTextContainer,
  HeroTextContent,
  SectionContainer,
  SectionContent,
  Subtitle,
  Title,
} from "./overviewScreen.styles";
import TabButton from "../../../components/tabs/tabButton/tabButton";
import Registration from "../../../components/sectionCards/registration/registration";

const OverviewScreen = () => {
  return (
    <>
      <HeroSection backgroundImage={MclarenDrifting}>
        <HeroTextContainer>
          <HeroTextContent>
            <Title>VIP GT3 Championship</Title>
            <Subtitle>
              Experience the ultimate racing league for Gran Turismo 7 featuring
              over 60 drivers partaking in an epic season with 8 thrilling races
              in GT3 cars.
            </Subtitle>
          </HeroTextContent>
        </HeroTextContainer>
      </HeroSection>
      <SectionContainer>
        <SectionContent>
          <ButtonsContainer>
            <TabButton active label="2026" />
            <TabButton isDisabled label="2027" />
            <TabButton isDisabled label="2028" />
          </ButtonsContainer>
          <Registration />
        </SectionContent>
      </SectionContainer>
    </>
  );
};

export default OverviewScreen;
