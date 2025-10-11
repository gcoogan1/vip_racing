import styled from 'styled-components';
import { fontCSS, theme } from '../../../styles/theme';

export const TableContainer = styled.div`
  width: 100%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-top-right-radius: ${theme.border.radius.medium};
  border-top-left-radius: ${theme.border.radius.medium};
  overflow: hidden;

    &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(180deg, #5C5654 0%, rgba(92, 86, 84, 0) 100%);    
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  @media (max-width: 703px) {
    min-width: 330px;
  }

`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.layout.space.large};
  text-align: left;
  width: 100%;
  gap: ${theme.layout.space.xsmall};
  border-bottom: ${theme.border.width.regular} solid ${theme.colors.surface.line};
  background: linear-gradient(90deg, rgba(241, 228, 71, 0.1) 0%, rgba(241, 228, 71, 0) 100%);
`

export const TableTitle = styled.h2`
  ${fontCSS(theme.typography.title.small)};
  color: ${theme.colors.surface.text1};
`

export const TableSubtitle = styled.p`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.surface.text3};
`

export const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  gap: ${theme.layout.space.medium};
  padding: ${theme.layout.space.large};
  box-sizing: border-box;
`
export const TableHeader = styled.div`
  ${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text3};
  gap: ${theme.layout.space.small};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const TableRow = styled.div`
  display: contents;
`

export const TableCell = styled.div`
  ${fontCSS(theme.typography.body.bold)};
  color: ${theme.colors.surface.text1};
  gap: ${theme.layout.space.medium};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`