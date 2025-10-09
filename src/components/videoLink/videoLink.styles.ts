import styled from "styled-components";
import { fontCSS, theme } from "../../styles/theme";

export const VideoLinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 240px;
  border-radius: ${theme.border.radius.medium};
  padding: ${theme.layout.space.small};
  gap: ${theme.layout.space.small};

  &:hover {
    background: #FFFFFF1A;
  }
`

export const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const Video = styled.iframe`
  width: 100%;
  height: 180px;
  border-radius: ${theme.border.radius.small};
  border: none;
  aspect-ratio: 16 / 9;
`

export const VideoOverlayButton = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 5;
`

export const VideoTextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  text-align: left;
  gap: ${theme.layout.space.xxsmall};
`

export const VideoTitle = styled.h3`
  ${fontCSS(theme.typography.body.bold)};
  color: ${theme.colors.surface.text1};
`
export const VideoSubtitle = styled.p`
  ${fontCSS(theme.typography.body.small)};
  color: ${theme.colors.surface.text3};
`
