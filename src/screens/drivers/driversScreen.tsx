import HeroSection from "../../components/heroSection/heroSection"

import { drivers } from "../../util/data/drivers/drivers";
import DriversHero from "../../assets/hero/DriversHero.jpg"
import { HeroTextContainer, HeroTextContent, Title, Subtitle, DriversSection, DriversContent, RightList, LeftList, DriversList } from "./driversScreen.styles"
import DriverCard from "../../components/cards/driverCard/driverCard";

const DriversScreen = () => {

  // Split drivers in half for left/right columns (style purposes)
  const half = Math.ceil(drivers.length / 2);
  const leftDrivers = drivers.slice(0, half);
  const rightDrivers = drivers.slice(half);

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
          </DriversList>
        </DriversContent>
      </DriversSection>
    </>
  )
}

export default DriversScreen