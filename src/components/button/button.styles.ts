import styled, { css } from "styled-components";

import { fontCSS, theme } from "../../styles/theme";

type Variant = "primary" | "secondary" | "tertiary" | "CTA";

export const ButtonContainer = styled.button<{ $variant?: Variant }>`
  ${fontCSS(theme.typography.subtitle.medium)};
  padding: ${theme.layout.space.medium};
  gap: ${theme.layout.space.small};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  border-width: ${theme.border.width.regular};
  border-style: solid;

  .button-icon {
    fill: currentColor;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return css`
          background-color: transparent;
          border-color: ${theme.colors.surface.text1};
          color: ${theme.colors.surface.text1};

          &:hover {
            background-color: ${theme.colors.surface.text1};
            color: ${theme.colors.surface.base};
          }
        `;
      case "secondary":
        return css`
          border-radius: ${theme.border.radius.small};
          background-color: rgba(255, 255, 255, 0.1);
          color: ${theme.colors.surface.text1};
          border-color: transparent;

          &:hover {
            background-color: rgba(255, 255, 255, 0.3);
          }
        `;
      case "tertiary":
        return css`
          background-color: transparent;
          border-color: ${theme.colors.surface.line};
          color: ${theme.colors.surface.text2};

          &:hover {
            border-color: ${theme.colors.surface.text1};
            color: ${theme.colors.surface.text1};
          }
        `;
      case "CTA":
        return css`
          background-color: ${theme.colors.primary.yellow};
          border-color: transparent;
          color: ${theme.colors.surface.base};

          &:hover {
            background-color: ${theme.colors.surface.line};
            color: ${theme.colors.surface.text3};
          }
        `;
    }
  }}
`;
