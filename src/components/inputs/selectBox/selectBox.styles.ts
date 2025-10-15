import styled from "styled-components";
import { fontCSS, theme } from "../../../styles/theme";

export const SelectBoxContainer = styled.div<{ active: boolean }>`
  width: 360px;
  height: 66px;
  display: flex;
  align-items: center;
  border-radius: ${theme.border.radius.small};
  padding: ${theme.layout.space.small} ${theme.layout.space.medium};
  gap: ${theme.layout.space.small};
  border-width: ${theme.border.width.regular};
  border-style: solid;
  border-color: ${props => props.active ? theme.colors.primary.yellow : theme.colors.surface.line};
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.surface.text1};
  }

  &:focus-within {
    border-color: ${theme.colors.primary.yellow};
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;
    min-width: 272px;
  }

`


export const SelectBoxLabel = styled.label`
  ${fontCSS(theme.typography.body.large)};
  color: ${theme.colors.surface.text3};
`
