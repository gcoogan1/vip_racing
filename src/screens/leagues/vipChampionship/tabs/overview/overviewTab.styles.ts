import styled from "styled-components";
import { fontCSS, theme } from "../../../../../styles/theme";

export const Banner = styled.img`
  width: 960px;
  height: 480px;
  object-fit: cover;

  @media (max-width: 983px) {
    width: 100%;
    height: auto;
  }
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.xlarge};
`;

export const Details = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${theme.layout.space.xlarge};
`;

export const Rules = styled.div`
  display: flex;
  width: 100%;
  border-top-left-radius: ${theme.border.radius.large};
  border-bottom-right-radius: ${theme.border.radius.large};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.layout.space.xlarge};
  background: rgba(255, 255, 255, 0.1);
`;

export const RulesContent = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.layout.space.large};
`

export const RulesHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: ${theme.layout.space.xSmall};
`;

export const RulesTitle = styled.h3`
  ${fontCSS(theme.typography.title.small)};
  color: ${theme.colors.surface.text1};
`;

export const RulesSubtitle = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text3};
  text-align: center;
`;

export const RulesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${theme.layout.space.medium};
  justify-content: center;
`;

export const RulesListDepartment = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${theme.layout.space.xSmall};
  justify-content: center;
`;

export const RulesListMember = styled.div`
  display: flex;
  width: 100%;
  gap: ${theme.layout.space.small};
`;

export const MemberName = styled.p`
  ${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text2};
  flex: 1;
  `;

export const MemberRole = styled.p`
  ${fontCSS(theme.typography.body.bold)};
  color: ${theme.colors.surface.text1};
  flex: 1;
  text-align: right;
`;