import styled from "styled-components";
import { theme, fontCSS} from "../../../styles/theme";

export const RegistrationContainer = styled.div`
  width: 100%;
  max-width: 960px;
  padding: ${theme.layout.space.xlarge};
  border-top-left-radius: ${theme.border.radius.large};
  border-bottom-left-radius: ${theme.border.radius.large};
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, rgba(241, 228, 71, 0.3) 0%, rgba(241, 228, 71, 0) 100%);


  @media (max-width: 703px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.xsmall};
  justify-content: center;
  width: 100%;
  align-items: flex-start;
  max-width: 360px;
`;

export const Title = styled.h2`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.primary.yellow};
`;

export const Subtitle = styled.h3`
  ${fontCSS(theme.typography.title.regular)};
  color: ${theme.colors.surface.text1};
`;

export const SubtitleSpan = styled.span`
  ${fontCSS(theme.typography.title.small)};
  color: ${theme.colors.surface.text2};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;