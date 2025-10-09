import styled from "styled-components";

import { fontCSS, theme } from "../../../styles/theme";

export const CardContainer = styled.div`
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
    background: linear-gradient(to right, #5c5654 0%, rgba(92, 86, 84, 0) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  @media (max-width: 703px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: ${theme.border.radius.small};
  overflow: hidden; /* ensures overlay + image respect the radius */

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(22, 14, 11, 0) 70.19%,
      #160e0b 100%
    );
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
  padding: ${theme.layout.space.medium} 0px;
  gap: ${theme.layout.space.medium};

  @media (max-width: 703px) {
    width: 100%;
  }
`;

export const TextContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${theme.layout.space.small};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.xxsmall};
`;

export const TitleImg = styled.h3`
  ${fontCSS(theme.typography.title.medium)};
  color: ${theme.colors.surface.text1};
`;

export const Title = styled.h3`
  ${fontCSS(theme.typography.title.small)};
  color: ${theme.colors.surface.text1};
`;

export const Subtitle = styled.h4`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.surface.text3};
`;

export const TextInfo = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text3};
`;
