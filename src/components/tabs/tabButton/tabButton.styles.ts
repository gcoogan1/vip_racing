import styled, { css } from "styled-components";
import { fontCSS, theme } from "../../../styles/theme";

export const TabButtonContainer = styled.button<{ $active: boolean }>`
  ${fontCSS(theme.typography.subtitle.medium)};
  background-color: transparent;
  color: ${theme.colors.surface.text1};
  padding: ${theme.layout.space.small} ${theme.layout.space.medium};
  gap: ${theme.layout.space.xsmall};
  border: ${theme.border.width.regular} solid ${theme.colors.surface.text1};
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.surface.text1};
    color: ${theme.colors.surface.base};
  }

  ${({ $active }) =>
    $active &&
    css`
      background-color: ${theme.colors.surface.text1};
      color: ${theme.colors.surface.base};
      box-shadow: 0px 0px 70px 0px #ffffff80;
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;
