import styled from "styled-components";
import { fontCSS, theme } from "../../../styles/theme";

export const CardContainer = styled.div`
  min-width: 280px;
  width: 360px;
  border-top-right-radius: ${theme.border.radius.large};
  border-top-left-radius: ${theme.border.radius.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, rgba(241, 228, 71, 0.1) 0%, rgba(241, 228, 71, 0) 50%);
  padding: ${theme.layout.space.medLarge};
  gap: ${theme.layout.space.small};

  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;
  }
`

export const ParticipantNumber = styled.h3`
  ${fontCSS(theme.typography.subtitle.medium)}
  color: ${theme.colors.surface.line};
  width: 100%
`

export const ParticipantContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${theme.layout.space.medium};
`

export const TextContent = styled.div`
display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${theme.layout.space.small};
  `


export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.xxsmall};
`;


export const Title = styled.h3`
  ${fontCSS(theme.typography.title.small)};
  color: ${theme.colors.surface.text1};
`;

export const SubtitleContainer = styled.div`
  display: flex;
  gap: 7px;
`;

export const Subtitle = styled.div`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.surface.text3};
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.xsmall};
`;

export const InfoItem = styled.li`
  width: 100%;
  display: flex;
  gap: ${theme.layout.space.small};
`;

export const InfoLabel = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  width: 80px;
  color: ${theme.colors.surface.text3};
`;

export const InfoValue = styled.p`
  ${fontCSS(theme.typography.body.bold)};
  flex: 1;
  color: ${theme.colors.surface.text2};
`;

  export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  gap: ${theme.layout.space.small};
  flex-wrap: wrap;
`;


