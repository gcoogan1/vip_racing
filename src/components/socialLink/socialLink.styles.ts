import { styled } from "styled-components";
import { fontCSS, theme } from "../../styles/theme";

export const SocialLinkContainer = styled.a`
  ${fontCSS(theme.typography.link.regular)};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${theme.border.radius.round};
  border: ${theme.border.width.regular} solid transparent;
  background: rgba(255, 255, 255, 0.7);
  color: ${theme.colors.surface.base};
  padding: ${theme.layout.space.small} ${theme.layout.space.medSmall};
  gap: ${theme.layout.space.xsmall};

  &:hover {
    background-color: ${theme.colors.surface.text2};
    border: ${theme.border.width.regular} solid ${theme.colors.surface.text2};
  }
`