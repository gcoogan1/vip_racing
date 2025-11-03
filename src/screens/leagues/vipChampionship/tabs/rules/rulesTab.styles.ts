import styled from "styled-components";
import { fontCSS, theme } from "../../../../../styles/theme";

export const RulesTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  align-self: center;
  gap: ${theme.layout.space.xlarge};
  padding: 0 ${theme.layout.space.medium};
`;

export const RulesHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.layout.space.small};
`;

export const RulesTitle = styled.h1`
  ${fontCSS(theme.typography.subtitle.large)};
  color: ${theme.colors.primary.yellow};
`;

export const RulesSubtitle = styled.h2`
  ${fontCSS(theme.typography.title.medium)};
  color: ${theme.colors.surface.text1};
`;

export const RulesContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${theme.layout.space.xlarge};
  color: ${theme.colors.surface.text1};
`;

export const RulesSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RulesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.small};
  list-style-type: lower-alpha;
`;

export const RulesListItem = styled.li`
  ${fontCSS(theme.typography.body.regular)};
  padding-left: ${theme.layout.space.medium};
  color: ${theme.colors.surface.text3};
`;

export const RulesText = styled.p`
  ${fontCSS(theme.typography.body.regular)};
    color: ${theme.colors.surface.text3};
`;

export const RulesSpanLarge = styled.span`
  ${fontCSS(theme.typography.body.large)};
`;

export const RulesSpanBold = styled.span`
  ${fontCSS(theme.typography.body.bold)};
`;