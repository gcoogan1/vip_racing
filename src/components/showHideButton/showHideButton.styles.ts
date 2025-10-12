import styled from "styled-components";
import { fontCSS, theme } from "../../styles/theme";

export const ButtonContainer = styled.button`
  ${fontCSS(theme.typography.body.large)};
  color: ${theme.colors.surface.text2};
  background-color: transparent;
  cursor: pointer;
  padding-top: ${theme.layout.space.small};
  padding-bottom: ${theme.layout.space.small};
  padding-left: ${theme.layout.space.medium};
  padding-right: ${theme.layout.space.small};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.layout.space.xxsmall};
  border-radius: ${theme.border.radius.round};
  outline: ${theme.border.width.regular} solid ${theme.colors.surface.text2};
  outline-offset: -2px;

  &:hover {
    color: ${theme.colors.surface.text1};
    background: rgba(255, 255, 255, 0.1);
    outline: ${theme.border.width.regular} solid ${theme.colors.surface.text1};
  }
`;

