import styled from "styled-components";

import { fontCSS, theme } from "../../../styles/theme";


export const ButtonContainer = styled.button`
  ${fontCSS(theme.typography.subtitle.medium)};
  background-color: transparent;
  border-width: ${theme.border.width.regular};
  border-style: solid;
  border-color: ${theme.colors.surface.text1};
  color: ${theme.colors.surface.text1};
  padding: ${theme.layout.space.medium};
  gap: ${theme.layout.space.xsmall};
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.surface.text1};
    color: ${theme.colors.surface.base};
  }
  `