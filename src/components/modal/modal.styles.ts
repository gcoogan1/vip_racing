import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ModalOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: #160e0b;
  z-index: 50;
  height: 100%;
  border-radius: ${theme.border.radius.medium};
  margin-top: ${theme.layout.space.xlarge};
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #5c5654 transparent;
`;

export const ModalContent = styled.div`
  background: linear-gradient(180deg, rgba(241, 228, 71, 0.3) 0%, rgba(241, 228, 71, 0) 30%);
  width: 100%;
  max-width: 960px;
  border-radius: ${theme.border.radius.large};
  padding: ${theme.layout.space.xlarge} ${theme.layout.space.large};
  overflow-y: auto;
  /* height: 100%; */
  position: relative;
`;
