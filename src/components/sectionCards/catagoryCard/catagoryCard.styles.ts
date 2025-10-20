import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top-left-radius: ${theme.border.radius.large};
  border-top-right-radius: ${theme.border.radius.large};
  border-width: ${theme.border.width.regular};
  border-style: solid;
  border-image-source: linear-gradient(180deg, #5C5654 0%, rgba(92, 86, 84, 0) 100%);
  background: linear-gradient(180deg, rgba(241, 228, 71, 0.1) 0%, rgba(241, 228, 71, 0) 30%);

  @media (max-width: 703px) {
    border-radius: ${theme.border.radius.medium};
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
  border-image-source: 2px solid var(--Color-Surface-Line, rgba(92, 86, 84, 1));
`