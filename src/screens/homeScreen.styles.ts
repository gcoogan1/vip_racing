import styled from "styled-components";
import { fontCSS, theme } from "../styles/theme";

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
  padding: ${theme.layout.space.xlarge} 0px;
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
    ${fontCSS(theme.typography.title.medium)};
  }
`;

export const Subtitle = styled.h2`
  ${fontCSS(theme.typography.title.small)};
  color: ${theme.colors.surface.text2};
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

  @media (max-width: 703px) {
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
  text-align: left
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
