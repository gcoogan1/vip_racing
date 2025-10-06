import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { fontCSS, theme } from "../../../styles/theme";

export const DropdownLinkContainer = styled(NavLink)`
  ${fontCSS(theme.typography.subtitle.medium)};
  background-color: transparent;
  color: ${theme.colors.surface.text1};
  padding: ${theme.layout.space.medium};
  gap: ${theme.layout.space.small};
  justify-content: space-between;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  svg{
    fill: currentColor;
  }

  &:hover {
    background-color: ${theme.colors.surface.text1};
    color: ${theme.colors.surface.base};
  }
  `