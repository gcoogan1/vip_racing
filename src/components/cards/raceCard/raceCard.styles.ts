import styled from "styled-components";
import { fontCSS, theme } from "../../../styles/theme";

export const RaceCardContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 512px;
  max-width: 960px;
  gap: ${theme.layout.space.medium};
  padding: ${theme.layout.space.large};
  border-top-left-radius: ${theme.border.radius.large};
  border-bottom-left-radius: ${theme.border.radius.large};
  background: linear-gradient(90deg, rgba(241, 228, 71, 0.1) 0%, rgba(241, 228, 71, 0) 50%);

  @media (max-width: 768px) {
    width: 100%;
    min-width: 304px;
    max-width: 703px
  }
`

export const RaceCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.medium};
  min-width: 320px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

export const RaceCardImage = styled.img`
  width: 360px;
  height: 168px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const RaceCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${theme.layout.space.small};
`

export const RaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const RaceNumber = styled.h3`
  ${fontCSS(theme.typography.subtitle.large)}
  color: ${theme.colors.primary.yellow};
`

export const RaceDate = styled.h4`
  ${fontCSS(theme.typography.subtitle.large)}
  color: ${theme.colors.surface.text2};
`

export const RaceTrack = styled.h2`
  ${fontCSS(theme.typography.title.regular)}
  color: ${theme.colors.surface.text1};

  @media (max-width: 768px) {
    ${fontCSS(theme.typography.title.small)}
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: ${theme.layout.space.medium};
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
