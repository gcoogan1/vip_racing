import styled from "styled-components";
import { fontCSS, theme } from "../../styles/theme";

export const InfoChipContainer = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  padding: ${theme.layout.space.medium};
  gap: ${theme.layout.space.small};
`;

export const NumberContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  flex-direction: column;
`;

export const Title = styled.h2`
  ${fontCSS(theme.typography.title.medium)};
  color: ${theme.colors.primary.yellow};
`;

export const Subtitle = styled.h3`
  ${fontCSS(theme.typography.subtitle.medium)};
  color: ${theme.colors.surface.text2};
`;


export const Description = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text3};
`;