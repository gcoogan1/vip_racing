import styled from "styled-components";

import { theme } from "../../styles/theme";

export const HeroContainer = styled.section<{ $background: string, $large?: boolean }>`
  position: relative;
  display: flex;
  height: ${(p) => (p.$large ? "1024px" : "640px")};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: url(${(p) => p.$background}) center/cover no-repeat;
  color: ${theme.colors.surface.text1};
  will-change: background-image;

  @media (max-width: 703px) {
    height: ${(p) => (p.$large ? "800px;" : "640px")};
  }
`;


export const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
`;
