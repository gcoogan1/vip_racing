import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const DropdownMenuContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`

export const MenuContent = styled.div`
  position: absolute;
  width: 280px;
  margin-top: 10px;
  background: rgba(22, 14, 11, 0.95);
  z-index: 3;
  right: 0;
  border: ${theme.border.width.regular} solid ${theme.colors.surface.text1};
  padding: ${theme.layout.space.small};
`