import styled from "styled-components";

import { theme } from "../../styles/theme";

export const HeroContainer = styled.section<{ $background: string }>`
  position: relative;
  display: flex;
  height: 1024px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: url(${(p) => p.$background}) center/cover no-repeat;
  color: ${theme.colors.surface.text1};

  @media (max-width: 1024px) {
    height: 800px;
  }
`;


export const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
`;
