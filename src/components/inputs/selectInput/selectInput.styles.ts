import styled from "styled-components";
import { fontCSS, theme } from "../../../styles/theme";
import ArrowDropDown from "../../../assets/icon/ArrowDropDown.svg?react";

export const SelectContainer = styled.div<{ active: boolean }>`
  position: relative;
  width: 360px;
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: ${theme.border.radius.small};
  padding: ${theme.layout.space.small} ${theme.layout.space.medium};
  gap: ${theme.layout.space.xxsmall};
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
`;

export const SelectHeader = styled.div<{ showLabel: boolean }>`
  ${fontCSS(theme.typography.body.medium)};
  color: ${({ showLabel }) =>
    showLabel ? theme.colors.surface.text1 : theme.colors.surface.text3};
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  background: transparent;
  outline: none;
  position: relative;
  margin-top: ${({ showLabel }) => (showLabel ? "6px" : "0")};
`;

export const SelectLabel = styled.label`
  position: absolute;
  top: 6px;
  left: 16px;
  ${fontCSS(theme.typography.body.small)};
  color: ${theme.colors.surface.text3};
`;

export const SelectList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background: ${theme.colors.surface.base};
  border-radius: ${theme.border.radius.small};
  margin-top: 6px;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  padding: 12px;

    &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(to top, #5c5654 0%, rgba(92, 86, 84, 0) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

export const SelectOption = styled.li<{ $selected: boolean }>`
  ${fontCSS(theme.typography.body.medium)};
  padding: 8px 16px;
  color: ${theme.colors.surface.text1};
  background: transparent;
  transition: background 0.2s;
  border-radius: ${theme.border.radius.small};
  
  cursor: pointer;

  &:hover {
    color: ${theme.colors.surface.base};
    background-color: ${theme.colors.surface.text1};
  }
`;

export const ArrowIcon = styled(ArrowDropDown)<{ $open: boolean }>`
  width: 20px;
  height: 20px;
  color: ${theme.colors.surface.text1};
  transition: transform 0.2s ease;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
`;
