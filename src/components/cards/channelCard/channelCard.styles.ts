import styled from "styled-components";
import { fontCSS, theme } from "../../../styles/theme";

export const ChannelCardContainer = styled.div`
  width: 100%;
  min-width: 208px;
  max-width: 294px;
  border-radius: ${theme.border.radius.medium};
  background: linear-gradient(0deg, rgba(241, 228, 71, 0.3) 0%, rgba(241, 228, 71, 0) 50%);
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.medium};
  padding-top: ${theme.layout.space.large};
  padding-bottom: ${theme.layout.space.medium};
  padding-left: ${theme.layout.space.medium};
  padding-right: ${theme.layout.space.medium};
  position: relative; /* needed for pseudo-element */
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px; /* border thickness */
    background: linear-gradient(to top, #5c5654 0%, rgba(92, 86, 84, 0) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;


export const DriverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DriverInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: ${theme.layout.space.xsmall};
`;


export const DriverName = styled.h3`
  ${fontCSS(theme.typography.title.small)};
  color: ${theme.colors.surface.text1};
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
