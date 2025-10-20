import styled from "styled-components";
import { theme } from "../../../../../styles/theme";

export const Banner = styled.img`
  width: 960px;
  height: 480px;
  object-fit: cover;

  @media (max-width: 983px) {
    width: 100%;
    height: auto;
  }
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.xlarge};
`;