import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { fontCSS, theme } from "../../styles/theme";

export const LinkContainer = styled(NavLink)`
  text-decoration: none;
  display: flex;
  width: 656px;
  border-radius: ${theme.border.radius.small};
  padding: ${theme.layout.space.small};
  gap: ${theme.layout.space.medium};
  align-items: center;
  color: ${theme.colors.surface.text1};
  background: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const PlayerCell = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 80px;
`;

export const UsernameCell = styled.div`
  ${fontCSS(theme.typography.body.bold)}
`;

export const TeamCell = styled.div`
  ${fontCSS(theme.typography.body.small)}
  color: ${theme.colors.surface.text3};
  text-align: left;
`;

export const RacingCarCell = styled.div`
  ${fontCSS(theme.typography.body.bold)}
  min-width: 80px;
  max-width: 140px;
  white-space: nowrap;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

export const TimeCell = styled.div`
  ${fontCSS(theme.typography.body.bold)};
  width: 96px;
  text-align: left;
`;

export const PointsCell = styled.div`
  ${fontCSS(theme.typography.body.bold)};
  width: 64px;
  text-align: left;
`;
