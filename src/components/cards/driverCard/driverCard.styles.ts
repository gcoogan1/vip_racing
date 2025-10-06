import styled from "styled-components";
import { fontCSS, theme } from "../../../styles/theme";

export const DriverCardContainer = styled.div`
  width: 100%;
  min-width: 280px;
  max-width: 384px;
  border-bottom-left-radius: ${theme.border.radius.large};
  border-bottom-right-radius: ${theme.border.radius.large};
  background: linear-gradient(
    360deg,
    rgba(241, 228, 71, 0.1) 0%,
    rgba(241, 228, 71, 0) 50%
  );
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.medium};
  padding: ${theme.layout.space.large};
`;

export const DriverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DriverInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.medium};
`;

export const DriverTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.medium};
`;

export const DriverSocialContainer = styled.div`
  width: 100%;
  display: flex;
  gap: ${theme.layout.space.small};
  flex-wrap: wrap;
`;

export const DriverTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.xxsmall};
`;

export const DriverName = styled.h3`
  ${fontCSS(theme.typography.title.medium)};
  color: ${theme.colors.surface.text1};

  @media (max-width: 703px) {
    ${fontCSS(theme.typography.title.small)};
  }
`;

export const RankContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.layout.space.xsmall};
`;

export const DriverRank = styled.div`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.surface.text3};
`;

export const DriverInfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.xsmall};
`;

export const DriverInfoItem = styled.li`
  width: 100%;
  display: flex;
  gap: ${theme.layout.space.small};
`;

export const DriverInfoLabel = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  flex: 1;
  color: ${theme.colors.surface.text3};
`;

export const DriverInfoValue = styled.p`
  ${fontCSS(theme.typography.body.bold)};
  flex: 3;
  color: ${theme.colors.surface.text2};
`;
