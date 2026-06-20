import { useRef } from "react";
import { useMediaQuery } from "../util/hooks/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { teamData } from "../util/data/team/team";
import { drivers } from "../util/data/drivers/drivers";
import { leagues } from "../util/data/leagues/leagues";
// import { raceData } from "../util/data/race/race";
import { streamers } from "../util/data/streamers/streamers";
import { useYouTubeStreams } from "../util/hooks/useYoutubeStreams";
import HeroSection from "../components/heroSection/heroSection";
import Button from "../components/button/button";
import OurTeamCard from "../components/sectionCards/ourTeamCard/ourTeamCard";
import DriverCard from "../components/cards/driverCard/driverCard";
import CarsRacingFinishLine from "../assets/hero/CarsRacingFinishLineLargeOp.jpg";
import Parallelogram from "../assets/icon/Parallelogram.svg?react";
// import ArrowDown from "../assets/icon/ArrowDown.svg?react";
import ArrowRight from "../assets/icon/ArrowRight.svg?react";
import iRacing from "../assets/game/iRacing.svg";
import gt7 from "../assets/game/GT7.svg";
import f1 from "../assets/game/F125.svg";
import vipLeagueImage from "../assets/new/leaguecard.jpg";
import ParticipantsIcon from "../assets/new/Participants.svg?react";
import GameIcon from "../assets/new/Game.svg?react";
import HostIcon from "../assets/new/Hosts.svg?react";
import CrasherCar from "../assets/new/CrasherCar.png";
import CrasherAvatar from "../assets/new/CrasherAvatar.png";
import VIPHeroVideo from "../assets/video/VIPHeroVideo.mp4";
import {
  AboutCardContainer,
  // ButtonsContainer,
  DriversContent,
  DriversList,
  GamesContainer,
  GamesSection,
  GtLogo,
  HeroTextContainer,
  HeroTextContent,
  LeagueCardContainer,
  LeftList,
  RightList,
  SectionContainer,
  SectionContent,
  StreamVideoContainer,
  Subtitle,
  TextContent,
  TextTitle,
  Title,
  TitleContainer,
  IRacingLogo,
  F1Logo,
  VipSection,
  VipContainer,
  VipTitle,
  VipTitleContainer,
  VipMiniTitle,
  VipSubtitle,
  VipContent,
  SpecialContent,
  VipLeague,
  VipLeagueCard,
  ImageContainer,
  TextContainer,
  LeagueName,
  IndicatorsContainer,
  LeagueInfoContainer,
  LeagueInfoContent,
  Icon,
  LeagueInfoText,
  Divider,
  StatusText,
  StatusContainer,
  LeagueContent,
  LeagueContentButtonContainer,
  LeagueContentTextContainer,
  LeagueContentSubtitle,
  LeagueContentTitle,
  ViewSeasonButton,
  JoinButton,
  FanZoneSection,
  FanZoneContainer,
  FanZoneTitle,
  FanZoneTitleContainer,
  FanZoneContents,
  FanZoneAvatar,
  FanZoneFan,
  FanZoneFanName,
  FanZoneFanRole,
  FanZoneFanTextContainer,
  FanZoneImage,
} from "./homeScreen.styles";
import VipLeaguesCard from "../components/sectionCards/vipLeaguesCard/vipLeaguesCard";
// import SportModeTable from "../components/tables/sportModeTable/sportModeTable";
import VideoLink from "../components/videoLink/videoLink";
import { useAnalytics } from "../util/hooks/useAnalytics";


const HomeScreen = () => {

  const aboutRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 703px)");
  const { track } = useAnalytics();

  const { videos, error } = useYouTubeStreams(
    streamers,
  );
  const showVideos = videos.slice(0, 3);
  const navigate = useNavigate();

  if (error) {
    console.error("Error fetching YouTube streams:", error);
  }

  const handleGoToSeasonGuide = () => {
    track("create_click", "Season Guide", "Homepage");
    const url = "https://drive.google.com/file/d/1iG0xOqE32Oqwqzsv1CKEPfsTvvo8FuT6/view";
    return window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleGoToJoinLeague = () => {
    track("create_click", "Join League", "Homepage");
    const url = "https://discord.gg/QqWMBUT6G";
    return window.open(url, "_blank", "noopener,noreferrer");
  };

  // const scrollToSection = () => {
  //   aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  // };
  
  return (
    <>
      <HeroSection backgroundImage={CarsRacingFinishLine} large videoSrc={VIPHeroVideo}>
        <HeroTextContainer>
          <HeroTextContent>
            <TitleContainer>
              <Title>Victory in Performance</Title>
              <Subtitle>eSports Sim Racing Team</Subtitle>
            </TitleContainer>
            {/* <ButtonsContainer>
              <Button
                label="Discover More"
                onClick={() => scrollToSection()}
                icon={<ArrowDown width={16} height={16} />}
              />
              <Button
                label="THE 2026 vip f1 league"
                onClick={() => navigate("/leagues/vip-formula1")}
                icon={<ArrowRight width={16} height={16} />}
              /> 
            </ButtonsContainer> */}
          </HeroTextContent>
        </HeroTextContainer>
      </HeroSection>
      <GamesSection>
        <GamesContainer>
          {!isMobile && <IRacingLogo loading="lazy" src={iRacing} alt="iRacing Logo" />}
          <GtLogo loading="lazy" src={gt7} alt="GT7 Logo" />
          {!isMobile && <F1Logo loading="lazy" src={f1} alt="F1 Logo" />}
        </GamesContainer>
      </GamesSection>
      <VipSection>
        <VipContainer>
          <VipTitleContainer>
            <VipMiniTitle>Motorsport Leagues presents</VipMiniTitle>
            <VipTitle>VIP GT World Championship</VipTitle>
            <VipSubtitle>The ultimate league.</VipSubtitle>
          </VipTitleContainer>
          <VipContent>
            <SpecialContent>
              <VipLeague>
                <VipLeagueCard>

                  <ImageContainer
                    $imageBg={vipLeagueImage}
                  >
                    <IndicatorsContainer>
                          <StatusContainer>
                            <StatusText>Coming Soon</StatusText>
                          </StatusContainer>
                    </IndicatorsContainer>
                  </ImageContainer>
                  <TextContainer>
                    <LeagueName>VIP GT World Championship</LeagueName>
                    <LeagueInfoContainer>
                      <LeagueInfoContent>
                          <Icon
                            aria-label="participants"
                          >
                          <ParticipantsIcon width={18} height={18} />
                          </Icon>
                          <LeagueInfoText>100</LeagueInfoText>
                          <Divider />
                      </LeagueInfoContent>
                      <LeagueInfoContent>
                        <Icon
                          aria-label="game"
                        >
                          <GameIcon width={18} height={18} />
                        </Icon>
                        <LeagueInfoText>GT7</LeagueInfoText>
                        <Divider />
                      </LeagueInfoContent>
                      <LeagueInfoContent>
                        <Icon
                          aria-label="host"
                        >
                          <HostIcon width={18} height={18} />
                        </Icon>
                        <LeagueInfoText>VIP Racing Team</LeagueInfoText>
                      </LeagueInfoContent>
                    </LeagueInfoContainer>
                  </TextContainer>
                </VipLeagueCard>
                <LeagueContent>
                  <LeagueContentTextContainer>
                    <LeagueContentTitle>The Premium League</LeagueContentTitle>
                    <LeagueContentSubtitle>Join this league for the ultimate experience available in Gran Turismo 7. It is held annually and is likely to be the best thing ever made!</LeagueContentSubtitle>
                  </LeagueContentTextContainer>
                  <LeagueContentButtonContainer>
                    <ViewSeasonButton
                      onClick={handleGoToSeasonGuide}
                    >
                      View Season
                    </ViewSeasonButton>
                    <JoinButton
                      onClick={handleGoToJoinLeague}
                    >
                      Join Discord
                    </JoinButton>
                  </LeagueContentButtonContainer>
                </LeagueContent>
              </VipLeague>
            </SpecialContent>
          </VipContent>
        </VipContainer>
      </VipSection>
      <SectionContainer ref={aboutRef}>
        <SectionContent>
          <TextContent>
            <TextTitle>Our Team</TextTitle>
            <Parallelogram />
          </TextContent>
          <AboutCardContainer>
            {teamData.map((info, index) => (
              <OurTeamCard
                key={index}
                side={info.side}
                title={info.title}
                info={info.info}
                imageSrc={info.imageSrc}
                imgAlt={info.imgAlt}
              />
            ))}
          </AboutCardContainer>
        </SectionContent>
      </SectionContainer>
      <SectionContainer>
        <DriversContent>
          <TextContent>
            <TextTitle>VIP Drivers</TextTitle>
            <Parallelogram />
          </TextContent>
          <DriversList>
            <LeftList>
              <DriverCard flag={drivers[0].flag} id={0} name={drivers[0].name} rank={drivers[0].rank} gtTag={drivers[0].gtTag} psnId={drivers[0].psnId} favCar={drivers[0].favCar} favTrack={drivers[0].favTrack} hardware={drivers[0].hardware} cardImg={drivers[0].cardImg} socials={drivers[0].socials} />
              <DriverCard flag={drivers[2].flag} id={3} name={drivers[2].name} rank={drivers[2].rank} gtTag={drivers[2].gtTag} psnId={drivers[2].psnId} favCar={drivers[2].favCar} favTrack={drivers[2].favTrack} hardware={drivers[2].hardware} cardImg={drivers[2].cardImg} socials={drivers[2].socials} />
            </LeftList>
            <RightList>
              <DriverCard flag={drivers[1].flag} id={2} name={drivers[1].name} rank={drivers[1].rank} gtTag={drivers[1].gtTag} psnId={drivers[1].psnId} favCar={drivers[1].favCar} favTrack={drivers[1].favTrack} hardware={drivers[1].hardware} cardImg={drivers[1].cardImg} socials={drivers[1].socials} />
              <DriverCard flag={drivers[3].flag} id={1} name={drivers[3].name} rank={drivers[3].rank} gtTag={drivers[3].gtTag} psnId={drivers[3].psnId} favCar={drivers[3].favCar} favTrack={drivers[3].favTrack} hardware={drivers[3].hardware} cardImg={drivers[3].cardImg} socials={drivers[3].socials} />
            </RightList>
          </DriversList>
              <div style={{ zIndex: 4, position: "absolute", bottom: 0 }}><Button label="View All Drivers" onClick={() => navigate("/drivers")} icon={<ArrowRight width={16} height={16} />} /></div>
        </DriversContent>
      </SectionContainer>
      <SectionContainer>
        <SectionContent>
            <TextContent>
            <TextTitle>VIP Leagues</TextTitle>
            <Parallelogram />
          </TextContent>
          <LeagueCardContainer>
            {leagues.map((league, index) => (
              <VipLeaguesCard
                key={index}
                title={league.name}
                subtitle={league.season}
                description={league.description}
                titleImg={league.miniImg}
                cardImage={league.image}
                imgAlt={league.imgAlt}
                buttonLabel={league.buttonLabel}
                buttonIcon={league.buttonIcon}
                route={league.route}
              />
            ))}
          </LeagueCardContainer>
        </SectionContent>
      </SectionContainer>
      {/* <SectionContainer>
        <SectionContent>
          <TextContent>
            <TextTitle>GT7 Sport Mode</TextTitle>
            <Parallelogram />
          </TextContent>
          <SportContainer>
            {raceData.map((race) => (
              <SportModeTable
                key={race.raceName}
                raceName={race.raceName}
                circuit={race.date}
                stats={race.stats}
              />
            ))}
          </SportContainer>
        </SectionContent>
      </SectionContainer> */}
      <SectionContainer>
        <SectionContent>
          <TextContent>
            <TextTitle>Latest Streams</TextTitle>
            <Parallelogram />
          </TextContent>
          <StreamVideoContainer>
            {showVideos.map((video) => (
              <VideoLink
                key={video.id}
                id={video.id}
                title={video.title}
                publishedAt={video.publishedAt}
                channelTitle={video.channelTitle}
                username={video.username}
              />
            ))}
          </StreamVideoContainer>
            <Button label="View Gallery" onClick={() => navigate("/media")} icon={<ArrowRight width={16} height={16} />} />
        </SectionContent>
      </SectionContainer>
      <FanZoneSection>
        <FanZoneContainer>
          <FanZoneTitleContainer>
            <FanZoneTitle>Fan Zone</FanZoneTitle>
            <Parallelogram />
          </FanZoneTitleContainer>
          <FanZoneContents>
            <FanZoneFan>
              <FanZoneAvatar src={CrasherAvatar} alt="Fan Avatar" />
              <FanZoneFanTextContainer>
                <FanZoneFanName>Crasher</FanZoneFanName>
                <FanZoneFanRole>VIP’S #1 Fan</FanZoneFanRole>
              </FanZoneFanTextContainer>
            </FanZoneFan>
            <FanZoneImage src={CrasherCar} alt="Crasher Car" />
          </FanZoneContents>
        </FanZoneContainer>
      </FanZoneSection>
    </>
  );
};

export default HomeScreen;
