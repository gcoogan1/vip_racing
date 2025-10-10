import { keyframes, styled } from "styled-components";
import RacingCar from "../../assets/icon/RacingCar.svg?react";
import { theme, fontCSS } from "../../styles/theme";

export const LoadingScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 16px;
`;

/* Word container relative to car */
export const WordContainer = styled.div`
  display: flex;
  position: relative;
  font-family: sans-serif;
  ${fontCSS(theme.typography.title.medium)};
  color: ${theme.colors.surface.text1};
  white-space: nowrap;
`;

/* Each letter hidden by default */
export const Letter = styled.span<{ $visible: boolean }>`
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transition: opacity 0.05s linear;
`;

/* Car animation across the word */
const driveAnimation = keyframes`
  0% { left: -50px; }
  100% { left: calc(100% + 50px); }
`;

export const RacingCarIcon = styled(RacingCar)`
  position: absolute;
  width: 50px;
  height: 50px;
  animation: ${driveAnimation} 1.6s linear forwards;
`;
