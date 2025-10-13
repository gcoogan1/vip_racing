import styled from "styled-components";
import { fontCSS, theme } from "../../../styles/theme";

export const TeamCardContainer = styled.div`
  width: 240px;
  border-radius: ${theme.border.radius.medium};
  background: linear-gradient(0deg, rgba(241, 228, 71, 0.1) 0%, rgba(241, 228, 71, 0) 50%);
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.xSmall};
  padding: ${theme.layout.space.medium};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(to top, #5c5654 0%, rgba(92, 86, 84, 0) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

`;

export const TeamNumber = styled.h3`
  ${fontCSS(theme.typography.subtitle.medium)};
  color: ${theme.colors.surface.line};
  width: 100%
`

export const TeamImage = styled.img`
  width: 100%;
  height: auto;
`

export const TeamInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${theme.layout.space.medium};
`

export const TeamName = styled.h4`
  ${fontCSS(theme.typography.title.small)};
  color: ${theme.colors.surface.text1};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const DriversList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.xSmall};
  padding: 0;
  margin: 0;
  list-style: none;
`

export const DriverItem = styled.li`
  width: 100%;
  display: flex;
  gap: ${theme.layout.space.small};
`

export const DriverLabel = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text3};
  flex: 1
`

export const DriverName = styled.p`
  ${fontCSS(theme.typography.body.bold)};
  color: ${theme.colors.surface.text2};
  flex: 2;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`