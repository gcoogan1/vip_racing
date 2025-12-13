import styled from "styled-components";
import { fontCSS, theme } from "../../../../../styles/theme";

export const RoundsList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${theme.layout.space.large};
`;

export const RoundSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-top-left-radius: ${theme.border.radius.medium};
  border-top-right-radius: ${theme.border.radius.medium};
  border-top-width: ${theme.border.width.regular};
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
`;

export const RoundHeader = styled.div<{ isHidden?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${theme.layout.space.large} ${theme.layout.space.medium};
  background: linear-gradient(
    90deg,
    rgba(241, 228, 71, 0.3) 0%,
    rgba(241, 228, 71, 0) 100%
  );
  border-bottom: 2px solid var(--Color-Surface-Line, rgba(92, 86, 84, 1));

  border-bottom-left-radius: ${({ isHidden }) =>
    isHidden ? theme.border.radius.medium : "0"};
  border-bottom-right-radius: ${({ isHidden }) =>
    isHidden ? theme.border.radius.medium : "0"};
  flex-direction: column;
`;

export const RoundTitle = styled.h3`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.primary.yellow};
`;

export const RoundSubtitle = styled.h3`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.surface.text1};
`;


export const RacesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${theme.layout.space.large};
  padding: ${theme.layout.space.large};
`;

export const Races = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${theme.layout.space.large};
`;