import styled from "styled-components";
import { theme, fontCSS } from "../../../styles/theme";

export const HeroTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${theme.layout.space.xlarge};
  background: linear-gradient(360deg, #160e0b 30.29%, rgba(22, 14, 11, 0) 100%);

  @media (max-width: 703px) {
    padding: ${theme.layout.space.xlarge} ${theme.layout.space.large};
  }
`;

export const HeroTextContent = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.small};
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  ${fontCSS(theme.typography.title.large)};
  color: ${theme.colors.surface.text1};

  @media (max-width: 703px) {
    ${fontCSS(theme.typography.title.medium)};
  }
`;

export const Subtitle = styled.h2`
  ${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text2};
`;

export const SectionContainer = styled.div`
  width: 100%;
  padding: 0px ${theme.layout.space.xlarge};
  display: flex;
  justify-content: center;

  @media (max-width: 703px) {
    padding: 0px ${theme.layout.space.medium};
  }
`;

export const SectionContent = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.layout.space.xlarge};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: ${theme.layout.space.medium};
`;