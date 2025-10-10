import styled from "styled-components";
import { theme, fontCSS } from "../../styles/theme";

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

export const GallerySection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.layout.space.xlarge};
  background: ${theme.colors.surface.base};

  @media (max-width: 703px) {
    padding: ${theme.layout.space.xlarge} ${theme.layout.space.large};
  }
`;

export const GalleryContent = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.layout.space.xlarge};
`;

export const ContentSections = styled.div`
  width: 100%;
  display: flex;
  gap: 128px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  gap: ${theme.layout.space.large};
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const SectionTitle = styled.h3`
  ${fontCSS(theme.typography.title.medium)};
  color: ${theme.colors.surface.text1};
`;

export const SectionList = styled.div`
  display: flex;
  gap: ${theme.layout.space.medium};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 703px) {
    flex-direction: column;
  }
`;

export const Photo = styled.img`
  width: 472px;
  height: 266px;
  border-radius: ${theme.border.radius.small};

  @media (max-width: 703px) {
    width: 336px;
    height: auto;
  }
`;
