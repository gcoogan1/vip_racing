import styled from "styled-components";
import { theme, fontCSS } from "../../styles/theme";

export const HeroTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${theme.layout.space.xlarge};
  background: linear-gradient(360deg, #160E0B 30.29%, rgba(22, 14, 11, 0) 100%);

  @media (max-width: 703px) {
    padding: ${theme.layout.space.xlarge} ${theme.layout.space.large};
  }
`;

export const HeroTextContent = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.small};
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  ${fontCSS(theme.typography.title.large)};
  color: ${theme.colors.surface.text1};

  @media (max-width: 703px) {
    ${fontCSS(theme.typography.title.medium)};
  }
`;

export const Subtitle = styled.h2`
  ${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text2};
`;

export const DriversSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.layout.space.xlarge};
  background: ${theme.colors.surface.base};

  @media (max-width: 703px) {
    padding: ${theme.layout.space.xlarge} ${theme.layout.space.large};
  }
`

export const DriversContent = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.layout.space.xlarge};
`

export const DriversList = styled.div`
  display: flex;
  width: 100%;
  gap: 80px;
  align-items: flex-start;

  @media (max-width: 703px) {
    flex-direction: column;
    gap: ${theme.layout.space.medium};
  }
`;

/* Split left/right driver columns */

export const LeftList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 80px;
  align-items: center;

  @media (max-width: 703px) {
    flex-direction: column;
    gap: ${theme.layout.space.medium};
  }
`;

export const RightList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
  gap: 80px;
  align-items: center;

  @media (max-width: 703px) {
    flex-direction: column;
    margin-top: 0px;
    gap: ${theme.layout.space.medium};
  }
`;