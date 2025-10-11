import HeroSection from "../../components/heroSection/heroSection"
import { drivers } from "../../util/data/drivers/drivers";
import { useMediaQuery } from "../../util/hooks/useMediaQuery";
import DriversHero from "../../assets/hero/DriversHero.jpg"
import { HeroTextContainer, HeroTextContent, Title, Subtitle, DriversSection, DriversContent, RightList, LeftList, DriversList, SingleList } from "./driversScreen.styles"
import DriverCard from "../../components/cards/driverCard/driverCard";

const DriversScreen = () => {

  const isMobile = useMediaQuery("(max-width: 703px)");

  // Split drivers into left/right columns for desktop view
  // Keep single column for mobile view
  const leftDrivers = drivers.filter((_, index) => index % 2 === 0);
  const rightDrivers = drivers.filter((_, index) => index % 2 !== 0);

  return (
    <>
      <HeroSection backgroundImage={DriversHero}>
        <HeroTextContainer>
          <HeroTextContent>
            <Title>Our Drivers</Title>
            <Subtitle>Meet the 16 talented racers that make up the heart of our team. Each driver brings their own style, skill, and dedication to the track. Pushing limits, chasing podiums, and representing our team with speed and sportsmanship.</Subtitle>
          </HeroTextContent>
        </HeroTextContainer>
      </HeroSection>
      <DriversSection>
        <DriversContent>
          <DriversList>
            {isMobile ? (
              <SingleList>
                {drivers.map((driver) => (
                  <DriverCard key={driver.name} id={0} name={driver.name} rank={driver.rank} gtTag={driver.gtTag} psnId={driver.psnId} favCar={driver.favCar} favTrack={driver.favTrack} hardware={driver.hardware} cardImg={driver.cardImg} socials={driver.socials} />
                )) }
              </SingleList>
            ) : (
              <>
                <LeftList>
                  {leftDrivers.map((driver, index) => (
                    <DriverCard key={index} id={driver.id} name={driver.name} rank={driver.rank} gtTag={driver.gtTag} psnId={driver.psnId} favCar={driver.favCar} favTrack={driver.favTrack} hardware={driver.hardware} cardImg={driver.cardImg} socials={driver.socials} />
                  ))}
                </LeftList>
                <RightList>
                  {rightDrivers.map((driver, index) => (
                    <DriverCard key={index} id={driver.id} name={driver.name} rank={driver.rank} gtTag={driver.gtTag} psnId={driver.psnId} favCar={driver.favCar} favTrack={driver.favTrack} hardware={driver.hardware} cardImg={driver.cardImg} socials={driver.socials} />
                  ))}
                </RightList>
              </>
            )}
          </DriversList>
        </DriversContent>
      </DriversSection>
    </>
  )
}

export default DriversScreen