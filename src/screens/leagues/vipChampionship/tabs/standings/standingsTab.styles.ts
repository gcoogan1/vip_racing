import styled from "styled-components";
import { fontCSS, theme } from "../../../../../styles/theme";

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StandingsTableContainer = styled.div`
  width: 640px;
  display: flex;
  align-self: center;
  flex-direction: column;
  border-top-left-radius: ${theme.border.radius.medium};
  border-top-right-radius: ${theme.border.radius.medium};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(180deg, #5c5654 0%, rgba(92, 86, 84, 0) 100%);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    border-top: 2px solid;
  }


    @media (max-width: 703px) {
    width: 100%;
  }
  
`

export const StandingsTableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${theme.layout.space.medium};
  border-bottom: 2px solid var(--Color-Surface-Line, rgba(92, 86, 84, 1));
`;

export const StandingsTableTitle = styled.h3`
  ${fontCSS(theme.typography.subtitle.medium)};
  color: ${theme.colors.surface.text2};
`;

export const StandingsTableContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${theme.layout.space.medium};
  gap: ${theme.layout.space.medium};
`;

export const ContentHeader = styled.div`
  display: flex;
  gap: ${theme.layout.space.medium};
  width: 100%;
  padding: 8px;
`;

export const RowDivider = styled.div`
  border: 0;
  border-top: 1px solid;
  border-image-source: linear-gradient(270deg, #5C5654 0%, rgba(92, 86, 84, 0) 100%);
  border-image-slice: 1;
`;

export const PositionCell = styled.div`
  width: 48px;
  text-align: center;
`;

export const ParticipantCell = styled.div`
  flex: 1;
  min-width: 80px;
`;
export const PointsCell = styled.div`
  width: 64px;
`;

export const TeamCell = styled.div`
  min-width: 80px;
  max-width: 140px;
  flex: 1;
`;

export const CellText = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text3};
`;