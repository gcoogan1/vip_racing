import styled from "styled-components";
import { fontCSS, theme } from "../styles/theme";
import { gradientBorder } from "../styles/gradiantBorder";


/* =====================================
  HERO SECTION
===================================== */

export const HeroTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${theme.layout.space.xlarge};
  background: linear-gradient(360deg, #160e0b 0%, rgba(22, 14, 11, 0) 100%);
`;

export const HeroTextContent = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.large};
  justify-content: center;
  align-items: center;
  /* padding: ${theme.layout.space.xlarge} 0px; */
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${theme.layout.space.small};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  ${fontCSS(theme.typography.title.large)};
  color: ${theme.colors.surface.text1};

  @media (max-width: 703px) {
    ${fontCSS(theme.typography.title.mediumRegular)};
  }
`;

export const Subtitle = styled.h2`
  ${fontCSS(theme.typography.title.small)};
  color: ${theme.colors.surface.text2};

  @media (max-width: 703px) {
    ${fontCSS(theme.typography.title.smallRegular)};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: ${theme.layout.space.medium};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
`;

/* =====================================
  GENERIC SECTION STYLES
===================================== */

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.layout.space.xlarge};
  background-color: ${theme.colors.surface.base};

  @media (max-width: 703px) {
    padding: ${theme.layout.space.xlarge} ${theme.layout.space.large};
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  padding: ${theme.layout.space.xlarge} 0px;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: ${theme.layout.space.xlarge};
`;

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.medium};
  align-items: center;
`;

export const TextTitle = styled.h2`
  ${fontCSS(theme.typography.title.large)};
  color: ${theme.colors.surface.text1};

  @media (max-width: 703px) {
    ${fontCSS(theme.typography.title.medium)};
  }
`;

/* =====================================
  VIP SECTION
===================================== */

export const VipSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px ${theme.layout.space.medium};
  align-items: center;
  align-self: stretch;
  background: linear-gradient(360deg, rgba(255, 242, 88, 0.1) 0%, rgba(255, 242, 88, 0) 100%);
  border-width: 2px 0px 2px 0px;
  border-style: solid;
  border-color: var(--Color-Primary-A3, rgba(138, 131, 55, 1));
`;

export const VipContainer = styled.div`
  display: flex;
  max-width: 1200px;
  padding: ${theme.layout.space.xlarge} 0 ${theme.layout.space.xlarge} 0;
  flex-direction: column;
  align-items: center;
  gap: ${theme.layout.space.large};
`;

export const VipTitleContainer = styled.div`
  display: flex;
  max-width: 640px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${theme.layout.space.xSmall};
`;

export const VipMiniTitle = styled.h3`
  ${fontCSS(theme.typography.title.xSmall)};
  color: #8A8337;
`;

export const VipTitle = styled.h1`
  ${fontCSS(theme.typography.title.medium)};
  color: #FFF258;
`;
export const VipSubtitle = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  color: #A5A5A5;
`;

export const VipContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.layout.space.xlarge};
  align-self: stretch;
`;

export const SpecialContent = styled.div`
  display: flex;
  padding: ${theme.layout.space.medium};
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.layout.space.medium};
  align-self: stretch;
  border-radius: 20px;
  ${gradientBorder({ gradient: "linear-gradient(360deg, rgba(255, 242, 88, 0.3) 0%, rgba(255, 242, 88, 0) 100%)", width: "4px" })};

  @media (max-width: 768px) {
    padding: 32px 16px;
    gap: 0px;
  }
`;



export const VipLeague = styled.div`
  display: flex;
  padding: ${theme.layout.space.xlarge};
  align-items: center;
  gap: ${theme.layout.space.xlarge};
  align-self: stretch;
  border-radius: 16px;
  background: linear-gradient(0deg,  rgba(255, 242, 88, 0.10) 0%, rgba(255, 242, 88, 0.00) 100%);
  flex-wrap: wrap;

  ${gradientBorder({ gradient: "linear-gradient(180deg, rgba(255, 242, 88, 0.3) 0%, rgba(255, 242, 88, 0) 100%)", width: "4px" })};

  @media (max-width: 768px) {
    padding: 32px 16px;
    gap: 16px;
  }

`;

export const VipLeagueCard = styled.div`
  display: flex;
  min-width: 264px;
  max-width: 384px;
  padding: ${theme.layout.space.medSmall};
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.layout.space.medSmall};
  border-radius: 0 0 20px 20px;
  background: linear-gradient(360deg, rgba(255, 242, 88, 0.1) 0%, rgba(255, 242, 88, 0) 100%);
  
  ${gradientBorder({ gradient: "linear-gradient(360deg, rgba(255, 242, 88, 0.3) 0%, rgba(255, 242, 88, 0) 100%)", width: "2px" })};
`;

export const ImageContainer = styled.div<{ $imageBg?: string }>`
  width: 100%;
  max-width: 360px;
  height: 160px;
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(255, 242, 88, 0.10);
  background-image: ${({ $imageBg }) =>
  $imageBg
    ? `
      linear-gradient(0deg, rgba(21, 21, 21, 0) 70%, #151515 100%),
      url(${$imageBg})
    `
    : "none"};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

export const IndicatorsContainer = styled.div`
  display: flex;
  padding: 8px;
  justify-content: flex-end;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  background: linear-gradient(270deg, rgba(255, 242, 88, 0.3) 0%, rgba(255, 242, 88, 0) 100%);
  flex-wrap: wrap;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  background: #FFF258;
  padding: 0 4px;
  border-radius: 4px;
`;

export const StatusText = styled.p`
  ${fontCSS(theme.typography.body.smallBold)};
  color: #2D2D2D;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 12px;
  gap: 4px;
  text-align: left;
  align-self: stretch;
  flex: 1;
  width: 100%;
`;

export const LeagueName = styled.h3`
  ${fontCSS(theme.typography.title.xSmall)};
  color: #FFFFFF;
  max-width: 100%;
`;

export const LeagueInfoContainer = styled.div`
  display: flex;
  gap: 4px;
  color: #A5A5A5;
`;

export const LeagueInfoContent = styled.div`
  display: flex;
  gap: 4px;
`;

export const Icon = styled.span`
  display: inline-flex;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  color: #A5A5A5;
`;

export const LeagueInfoText = styled.p`
  ${fontCSS(theme.typography.body.bold)};
  color: #A5A5A5;
`;

export const Divider = styled.div`
  width: 1px;
  height: 24px;
  background: rgba(255, 242, 88, 0.10);
`;

export const SquadInfoText = styled.p`
  ${fontCSS(theme.typography.body.smallBold)};
  color: #A5A5A5;
`;



export const LeagueContent = styled.div`
  display: flex;
  max-width: 640px;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.layout.space.medium};
  flex: 1 0 0;

  @media (max-width: 768px) {
    padding: 0px 8px;
  }
`;

export const LeagueContentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
  align-self: stretch;
`;

export const LeagueContentTitle = styled.h3`
  ${fontCSS(theme.typography.title.small)};
  color: #FFFFFF;
`;

export const LeagueContentSubtitle = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  color: #A5A5A5;
`;

export const LeagueContentButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 8px;
  width: 100%;
  align-self: stretch;
  flex-wrap: wrap;
`;

export const ViewSeasonButton = styled.button`
  background: linear-gradient(90deg, rgba(255, 242, 88, 0.3) 0%, rgba(255, 242, 88, 0) 100%);
  display: flex;
  box-sizing: border-box;
  height: 52px;
  padding: 16px;
  border: none;
  outline: none;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border-radius: 8px;
  color: #FFF258;
  ${fontCSS(theme.typography.body.bold)};
  &:hover {
    background-color: #FFF2584D;
  }
`;

export const JoinButton = styled.button`
  background: transparent;
  display: flex;
  box-sizing: border-box;
  height: 52px;
  padding: 14px 16px;
  border: 2px solid rgba(255, 242, 88, 0.20);
  outline: none;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border-radius: 8px;
  color: #FFF258;
  ${fontCSS(theme.typography.body.bold)};
  &:hover {
    background-color: #FFF2584D;
  }
`;


/* =====================================
  GAMES SECTION
===================================== */

export const GamesSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${theme.layout.space.xlarge};
  background-color: ${theme.colors.surface.base};
`;

export const GamesContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  padding: ${theme.layout.space.xlarge} 0px;
  align-items: center;
  justify-content: space-between;
  /* justify-content: space-between; */
  gap: ${theme.layout.space.large};

  @media (max-width: 703px) {
    flex-direction: column;
    justify-content: center;
  }
`;


/* Game logos */

export const IRacingLogo = styled.img`
  width: 200px;
  height: 80px;
  opacity: 0.3;

  @media (max-width: 703px) {
    width: 120px;
    height: 48px;
  }
`;

export const GtLogo = styled.img`
  width: 240px;
  height: 96px;
  opacity: 0.5;

  @media (max-width: 703px) {
    width: 160px;
    height: 64px;
  }
`;

export const F1Logo = styled.img`
  width: 200px;
  height: 80px;
  opacity: 0.3;

  @media (max-width: 703px) {
    width: 120px;
    height: 48px;
  }
`;

/* =====================================
  ABOUT SECTION STYLES
===================================== */

export const AboutCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${theme.layout.space.large};
  align-items: center;
`;

/* =====================================
  DRIVERS SECTION STYLES
===================================== */

export const DriversContent = styled.div`
  position: relative; /* needed for ::after */
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  padding: ${theme.layout.space.xlarge} 0;
  align-items: center;
  justify-content: center;
  gap: ${theme.layout.space.xlarge};

  /* overlay on top, fading upward from the bottom */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0; /* stick to bottom */
    height: 30%; /* height of gradient overlay */
    background: linear-gradient(
      0deg,
      #160e0b 30.29%,
      /* dark at bottom */ rgba(22, 14, 11, 0) 100% /* fade out upward */
    );
    pointer-events: none;
    z-index: 3; /* sits above content */

    @media (max-width: 703px) {
      height: 15%;
    }
  }
`;

export const DriversList = styled.div`
  display: flex;
  width: 100%;
  gap: 80px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: ${theme.layout.space.medium};
  }
`;

/* Split left/right driver columns */

export const LeftList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 80px;
  align-items: center;

  @media (max-width: 703px) {
    flex-direction: column;
    gap: ${theme.layout.space.medium};
  }
`;

export const RightList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
  gap: 80px;
  align-items: center;

  @media (max-width: 703px) {
    flex-direction: column;
    margin-top: 0px;
    gap: ${theme.layout.space.medium};
  }
`;

/* =====================================
  LEAGUES SECTION STYLES
===================================== */

export const LeagueCardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${theme.layout.space.large};
  text-align: left;
`;

/* =====================================
  SPORT MODE SECTION STYLES
===================================== */

export const SportContainer = styled.div`
  display: flex;
  width: 100%;
  gap: ${theme.layout.space.xlarge};

  @media (max-width: 703px) {
    flex-direction: column;
  }
`;


export const StreamVideoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: ${theme.layout.space.medium};
  justify-content: center;
  align-items: center;

  @media (max-width: 703px) {
    flex-direction: column;
  }
`;

/* =====================================
  FAN ZONE SECTION 
===================================== */


export const FanZoneSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${theme.layout.space.xLarge};
  text-align: center;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: linear-gradient(180deg, rgba(237, 3, 4, 0.00) 0%, rgba(237, 3, 4, 0.20) 100%), var(--Color-Surface-Base, #160E0B);
`;

export const FanZoneContainer = styled.div`
  display: flex;
  max-width: 960px;
  padding: 64px 0;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  flex: 1 0 0;
`;

export const FanZoneTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

export const FanZoneTitle = styled.h2`
  ${fontCSS(theme.typography.title.large)};
  color: ${theme.colors.surface.text1};
`;

export const FanZoneContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const FanZoneImage = styled.img`
  height: 540px;
  align-self: stretch;
  aspect-ratio: 16/9;
  border-radius: 16px;
  object-fit: cover;
  object-position: 50%;

  @media (max-width: 703px) {
    height: 184.5px;
    object-fit: cover;
    object-position: 50%;
  }
`;


export const FanZoneFan = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  border-radius: 16px;


  background: linear-gradient(180deg, rgba(241, 228, 71, 0.10) 0%, rgba(241, 228, 71, 0.00) 100%);
  ${gradientBorder({ gradient: "linear-gradient(180deg, #5C5654 0%, rgba(92, 86, 84, 0) 100%)", width: "2px" })};
  
`;

export const FanZoneAvatar = styled.img`
  width: 80px;
  height: 80px;
  aspect-ratio: 1/1;
  border-radius: 999px;
  border: none;
  outline: none;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

export const FanZoneFanTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-self: stretch;
`;

export const FanZoneFanName = styled.h3`
  ${fontCSS(theme.typography.title.regular)};
  color: ${theme.colors.surface.text1};
`;

export const FanZoneFanRole = styled.p`
  ${fontCSS(theme.typography.subtitle.large)};
  color: #F1E447;
`;