import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const ButtonContainer = styled.button`
  cursor: pointer;
  background-color: ${theme.colors.surface.text1};
  border-radius: ${theme.border.radius.round};
  padding: ${theme.layout.space.small};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`