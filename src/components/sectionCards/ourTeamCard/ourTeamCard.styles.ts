import styled from "styled-components";

import { fontCSS, theme } from "../../../styles/theme";

export const CardContainer = styled.div<{ $from: "left" | "right" }>`
  position: relative;
  border-radius: ${theme.border.radius.medium};
  padding: ${theme.layout.space.medium};
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: ${theme.layout.space.large};
  background: ${theme.colors.surface.base};
  overflow: hidden;

  /* Create the gradient border using ::before */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px; /* border thickness */
    background: ${({ $from }) =>
      $from === "left"
        ? `linear-gradient(to right, #5c5654 0%, rgba(92, 86, 84, 0) 100%)`
        : `linear-gradient(to left, #5c5654 0%, rgba(92, 86, 84, 0) 100%)`};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  @media (max-width: 703px) {
    flex-direction: ${({ $from }) =>
      $from === "left" ? "column" : "column-reverse"};
  }
`;

export const ImageWrapper = styled.div<{ $from: "left" | "right" }>`
  position: relative;
  border-radius: ${theme.border.radius.small};
  overflow: hidden; /* ensures overlay + image respect the radius */

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ $from }) =>
      $from === "left"
        ? `linear-gradient(
      90deg,
      rgba(22, 14, 11, 0) 70.19%,
      #160e0b 100%
    )`
        : `linear-gradient(
      270deg,
      rgba(22, 14, 11, 0) 70.19%,
      #160e0b 100%
    )`};
    pointer-events: none;

    @media (max-width: 703px) {
      background: linear-gradient(0deg, #160e0b 0%, rgba(22, 14, 11, 0) 30%);
    }
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 360px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: ${theme.layout.space.small};

  @media (max-width: 703px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  ${fontCSS(theme.typography.title.small)};
  color: ${theme.colors.surface.text1};
`;

export const Info = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text3};
`;
