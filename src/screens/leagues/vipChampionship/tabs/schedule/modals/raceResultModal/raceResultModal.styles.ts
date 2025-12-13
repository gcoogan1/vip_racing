import styled from "styled-components";
import { theme, fontCSS } from "../../../../../../../styles/theme";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.xlarge};
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.small};
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const ModalTitle = styled.h2`
      ${fontCSS(theme.typography.title.medium)};
  color: ${theme.colors.surface.text1};
`;

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ModalSubtitleColor = styled.h3`
    ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.primary.yellow};
`;

export const ModalSubtitle = styled.h3`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.surface.text2};
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.layout.space.medLarge};
`;

export const TableSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.layout.space.xlarge};
`;

export const ResultTableContainer = styled.div`
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

export const ResultTableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${theme.layout.space.medium};
  border-bottom: 2px solid var(--Color-Surface-Line, rgba(92, 86, 84, 1));
`;

export const ResultTableTitle = styled.h3`
  ${fontCSS(theme.typography.subtitle.medium)};
  color: ${theme.colors.surface.text2};
`;

export const ResultTableContent = styled.div`
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
  padding: 16px;
`;

export const RowDivider = styled.div`
  border: 0;
  border-top: 1px solid;
  border-image-source: linear-gradient(270deg, #5C5654 0%, rgba(92, 86, 84, 0) 100%);
  border-image-slice: 1;
`;

export const PositionCell = styled.div`
  width: 48px;
`;

export const DriverCell = styled.div`
  flex: 1;
  min-width: 80px;
`;

export const TeamCell = styled.div`
  flex: 1;
  min-width: 80px;
  max-width: 140px;
`;

export const TimeCell = styled.div`
  width: 96px;
`;

export const PointsCell = styled.div`
  width: 64px;
`;

export const CellText = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text3};
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 640px;
  align-items: center;
  padding-top: ${theme.layout.space.small};
  padding-bottom: ${theme.layout.space.small};
  padding-left: ${theme.layout.space.medLarge};
  padding-right: ${theme.layout.space.small};
  border-top-right-radius: ${theme.border.radius.medium};
  border-bottom-right-radius: ${theme.border.radius.medium};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 4px;
    background: linear-gradient(270deg, rgba(241, 228, 71, 0.3) 0%, rgba(241, 228, 71, 0) 100%);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }


    @media (max-width: 703px) {
    width: 100%;
  }
`;

export const TotalText = styled.p`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.surface.text2};
  flex: 1;
`;

export const TotalPointsContainer = styled.div`
  border-top-right-radius: ${theme.border.radius.medium};
  border-bottom-right-radius: ${theme.border.radius.medium};
  padding: ${theme.layout.space.medium} ${theme.layout.space.xlarge};
  gap: 10px;
  background: linear-gradient(270deg, rgba(241, 228, 71, 0.3) 0%, rgba(241, 228, 71, 0) 100%);
  display: flex;
  justify-content: center;  
  align-items: center;
  text-align: center;
`;

export const TotalPointsText = styled.p`
  ${fontCSS(theme.typography.subtitle.xLarge)};
  color: ${theme.colors.primary.yellow};
`;