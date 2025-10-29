import styled from "styled-components";
import { fontCSS, theme } from "../../../../../styles/theme";

export const TeamCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.layout.space.large};
  justify-content: center;
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Heats = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${theme.layout.space.xlarge};
`;

export const Heat = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${theme.layout.space.large};
  border-top-left-radius: ${theme.border.radius.large};
  border-top-right-radius: ${theme.border.radius.large};
  border-top-width: ${theme.border.width.large};
  gap: ${theme.layout.space.large};
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

export const HeatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const HeatTitle = styled.h3`
  ${fontCSS(theme.typography.title.small)};
  color: ${theme.colors.surface.text2};
`;

export const HeatSubtitle = styled.h2`
  ${fontCSS(theme.typography.title.medium)};
  color: ${theme.colors.surface.text1};
`;

export const SplitContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 816px;
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

export const SplitHeader = styled.div<{ isHidden: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${theme.layout.space.large};
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
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SplitTitle = styled.h4`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.primary.yellow};
`;

export const SplitSubtitle = styled.span`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.surface.text2};
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: ${theme.layout.space.large};
  justify-content: center;
  padding: ${theme.layout.space.large};
`;
