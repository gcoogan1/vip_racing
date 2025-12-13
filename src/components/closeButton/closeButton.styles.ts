import { styled } from "styled-components";
import { fontCSS, theme } from "../../styles/theme";

export const ButtonContainer = styled.button`
  margin-bottom: ${theme.layout.space.small};
  cursor: pointer;
  background-color: ${theme.colors.surface.text1};
  border-radius: ${theme.border.radius.round};
  padding-top: ${theme.layout.space.small};
  padding-right: ${theme.layout.space.medSmall};
  padding-bottom: ${theme.layout.space.small};
  padding-left: ${theme.layout.space.medium};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.layout.space.xxsmall};

  &:hover {
    background-color: ${theme.colors.surface.text2};
  }
`

export const Text = styled.p`
    ${fontCSS(theme.typography.body.large)};
    color: ${theme.colors.surface.base};
`

