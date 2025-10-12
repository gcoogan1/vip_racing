import styled, { css } from "styled-components";
import { fontCSS, theme } from "../../../../styles/theme";

export const ButtonContainer = styled.button<{ $active: boolean }>`
  padding: ${theme.layout.space.medSmall} ${theme.layout.space.large};
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${theme.border.radius.round};

   ${({ $active }) =>
    $active &&
    css`
      background-color: ${theme.colors.surface.text1};
      box-shadow: 2px 2px 32px 0px rgba(22, 14, 11, 0.5);
    `}
`;

export const ButtonText = styled.div<{ $active: boolean }>`
  ${fontCSS(theme.typography.subtitle.medium)};
  color: ${theme.colors.surface.text2};

  ${({ $active }) =>
    $active &&
    css`
      color: ${theme.colors.surface.base};
    `}
`;
