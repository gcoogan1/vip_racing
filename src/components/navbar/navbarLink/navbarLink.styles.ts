import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { fontCSS, theme } from "../../../styles/theme";

export const NavbarLinkContainer= styled(NavLink)`
  ${fontCSS(theme.typography.subtitle.medium)};
  border-bottom: ${theme.border.width.thick} solid transparent;
  color: ${theme.colors.surface.text1};
  padding: ${theme.layout.space.medium};
  text-decoration: none;
  gap: ${theme.layout.space.xsmall};
  display: flex;
  align-items: center;
  cursor: pointer;

  &.active {
    border-color: ${theme.colors.surface.text1};
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.30) 100%);
  }


  &:hover {
    border-color: ${theme.colors.surface.text1};
  }
`;