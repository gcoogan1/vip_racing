import styled from "styled-components";
import { fontCSS, theme } from "../../styles/theme";

export const SettingDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1);
  padding: ${theme.layout.space.small} ${theme.layout.space.medium};
  border-radius: ${theme.border.radius.small};
`

export const TopText = styled.p`
${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text3};
`

export const BottomText = styled.p`
${fontCSS(theme.typography.body.bold)};
  color: ${theme.colors.surface.text1};
`