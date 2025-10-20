import styled from "styled-components";
import { fontCSS, theme } from "../../../styles/theme";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top-left-radius: ${theme.border.radius.large};
  border-top-right-radius: ${theme.border.radius.large};
  border-top-width: ${theme.border.width.regular};
  background: linear-gradient(180deg, rgba(241, 228, 71, 0.1) 0%, rgba(241, 228, 71, 0) 30%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(180deg, #5C5654 0%, rgba(92, 86, 84, 0) 100%);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    border-top: 2px solid;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.layout.space.large} ${theme.layout.space.xlarge};
  align-items: center;
  justify-content: center;
  border-bottom-width: ${theme.border.width.regular};
  border-bottom-style: solid;
  border-color: ${theme.colors.surface.line};
`

export const Title = styled.h3`
  ${fontCSS(theme.typography.title.small)};
  color: ${theme.colors.surface.text1};
`

export const InfoGrid = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.layout.space.xlarge};
  padding: ${theme.layout.space.xlarge};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`