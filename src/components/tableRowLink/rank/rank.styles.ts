import styled from "styled-components";
import { fontCSS, theme } from "../../../styles/theme";

export const RankContainer = styled.div`
  ${fontCSS(theme.typography.subtitle.xLarge)};
  color: ${theme.colors.surface.text1};
  width: 48px;
  border-top-right-radius: ${theme.border.radius.round};
  border-bottom-right-radius: ${theme.border.radius.round};
  padding-top: ${theme.layout.space.xSmall};
  padding-bottom: ${theme.layout.space.xSmall};
  padding-right: ${theme.layout.space.medium};
  display: flex;
  align-items: center;
  justify-content: right;
`