import styled from "styled-components";
import { fontCSS, theme } from "../../styles/theme";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100%;
  padding: ${theme.layout.space.xlarge};
  background: linear-gradient(360deg, #160E0B 0%, rgba(22, 14, 11, 0) 100%);
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 960px;
  gap: ${theme.layout.space.large};
  padding: ${theme.layout.space.xlarge} 0px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: ${theme.layout.space.small};
`

export const Title = styled.h2`
  ${fontCSS(theme.typography.title.large)};
  color: ${theme.colors.surface.text1};
`

export const Subtitle = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text3};
`