import styled from "styled-components";
import { theme, fontCSS } from "../../../../../../../styles/theme";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.xlarge};
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.small};
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  ${fontCSS(theme.typography.title.medium)};
  color: ${theme.colors.surface.text1};
`;

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ModalSubtitleColor = styled.h3`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.primary.yellow};
`;

export const ModalSubtitle = styled.h3`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.surface.text2};
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.layout.space.large};
`;

export const TableContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  gap: ${theme.layout.space.large};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SettingsTable = styled.div<{ isSmall?: boolean, isCar?: boolean }>`
  max-width: ${({ isSmall }) => (isSmall ? "304px" : "640px")};
  width: 100%;
  display: flex;
  align-self: center;
  flex-direction: column;
  border-top-left-radius: ${theme.border.radius.medium};
  border-top-right-radius: ${theme.border.radius.medium};
  position: relative;
  overflow: hidden;
  height: ${({ isCar }) => (isCar ? "211px" : "auto")};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(180deg, #5c5654 0%, rgba(92, 86, 84, 0) 100%);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    border-top: 2px solid;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const SettingsTableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${theme.layout.space.medium};
  border-bottom: 2px solid var(--Color-Surface-Line, rgba(92, 86, 84, 1));
`;

export const SettingsTableTitle = styled.h3`
  ${fontCSS(theme.typography.subtitle.medium)};
  color: ${theme.colors.surface.text2};
`;

export const SmallSettingsTableContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  padding: ${theme.layout.space.medium};
  gap: ${theme.layout.space.medSmall};
`;

export const SettingsTableContent = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.layout.space.medium};
  padding: ${theme.layout.space.medium};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const SettingsDetail = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: column;
  border-radius: ${theme.border.radius.small};
  padding-top: ${theme.layout.space.small};
  padding-bottom: ${theme.layout.space.small};
  padding-right: ${theme.layout.space.large};
  padding-left: ${theme.layout.space.medium};
  background: #ffffff1a;
`;

export const CarSettingsDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: ${theme.border.radius.small};
  padding-top: ${theme.layout.space.small};
  padding-bottom: ${theme.layout.space.medLarge};
  padding-right: ${theme.layout.space.medium};
  padding-left: ${theme.layout.space.medium};
  background: #ffffff1a;
`;

export const CarSettingsImage = styled.img`
  width: 272px;
  height: 143px;
  object-fit: contain;
  position: absolute;
  bottom: -16px;
  z-index: 3;  
`;


export const SettingsDetailTitle = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  width: 224px;
  height: 20px;
  color: ${theme.colors.surface.text3};
  overflow:hidden; 
        white-space:nowrap; 
        text-overflow: ellipsis;
`;

export const SettingsDetailText = styled.p`
  ${fontCSS(theme.typography.body.bold)};
  width: 224px;
  height: 20px;
  color: ${theme.colors.surface.text1};
  overflow:hidden; 
        white-space:nowrap; 
        text-overflow: ellipsis;
`;

//   display: flex;
//   justify-content: space-between;
//   width: 640px;
//   align-items: center;
//   padding-top: ${theme.layout.space.small};
//   padding-bottom: ${theme.layout.space.small};
//   padding-left: ${theme.layout.space.medLarge};
//   padding-right: ${theme.layout.space.small};
//   border-top-right-radius: ${theme.border.radius.medium};
//   border-bottom-right-radius: ${theme.border.radius.medium};
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     inset: 0;
//     border-radius: inherit;
//     padding: 4px;
//     background: linear-gradient(270deg, rgba(241, 228, 71, 0.3) 0%, rgba(241, 228, 71, 0) 100%);
//     mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//     -webkit-mask-composite: xor;
//     mask-composite: exclude;
//     pointer-events: none;
//   }

//     @media (max-width: 703px) {
//     width: 100%;
//   }
// `;

// export const TotalText = styled.p`
//   ${fontCSS(theme.typography.subtitle.large)};
//   color: ${theme.colors.surface.text2};
//   flex: 1;
// `;

// export const TotalPointsContainer = styled.div`
//   border-top-right-radius: ${theme.border.radius.medium};
//   border-bottom-right-radius: ${theme.border.radius.medium};
//   padding: ${theme.layout.space.medium} ${theme.layout.space.xlarge};
//   gap: 10px;
//   background: linear-gradient(270deg, rgba(241, 228, 71, 0.3) 0%, rgba(241, 228, 71, 0) 100%);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// `;

// export const TotalPointsText = styled.p`
//   ${fontCSS(theme.typography.subtitle.xLarge)};
//   color: ${theme.colors.primary.yellow};
// `;
