import styled, { css } from "styled-components";
import { fontCSS, theme } from "../../../../styles/theme";

export const LinkContainer = styled.button`
  padding-top: ${theme.layout.space.medium};
  padding-right: ${theme.layout.space.medium};
  padding-left: ${theme.layout.space.medium};
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LinkText = styled.div<{ $active: boolean }>`
  ${fontCSS(theme.typography.subtitle.medium)};
  color: ${theme.colors.surface.text3};
  padding-bottom: ${theme.layout.space.medium};
  border-bottom: ${theme.border.width.thick} solid transparent;

  &:hover {
    color: ${theme.colors.surface.text1};
  }

  ${({ $active }) =>
    $active &&
    css`
      color: ${theme.colors.surface.text1};
      border-color: ${theme.colors.surface.text1};
    `}
`;
