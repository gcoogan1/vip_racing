import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const SwitchContainer = styled.div`
  display: inline-flex;
  gap: ${theme.layout.space.xsmall};
  background: rgba(255, 255, 255, 0.1);
  border: ${theme.border.width.thin} solid rgba(255, 255, 255, 0.2);
  padding: ${theme.layout.space.small};
  border-radius: ${theme.border.radius.round};
`;