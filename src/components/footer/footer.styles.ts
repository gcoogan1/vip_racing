import styled from "styled-components";
import { fontCSS, theme } from "../../styles/theme";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  min-width: 704px;
  display: flex;
  justify-content: center;
  padding: ${theme.layout.space.xlarge};
  background-color: ${theme.colors.surface.base};
  position: fixed;
  bottom: 0;
  left: 0;

  @media (max-width: 703px) {
    min-width: 360px;
    max-width: 703px;
    width: 100%;
  }
`;

export const FooterContent = styled.div`
  max-width: 960px;
  width: 100%;
  padding: ${theme.layout.space.xlarge} 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.layout.space.xlarge};

  @media (max-width: 703px) {
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BrandContainer = styled.div`
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  gap: 10px;
`;

export const SocialsContainer = styled.div`
  width: 100%;
  display: flex;
  padding: ${theme.layout.space.medLarge};
  gap: ${theme.layout.space.small};
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  gap: ${theme.layout.space.xlarge};
  flex-wrap: wrap;

  @media (max-width: 703px) {
    padding: 0px ${theme.layout.space.medLarge};
  }
`;

export const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.space.medium};
`;
export const LinkTile = styled.p`
  ${fontCSS(theme.typography.subtitle.medium)};
  color: ${theme.colors.surface.text3};
`;
export const Link = styled(NavLink)`
  ${fontCSS(theme.typography.body.regular)};
  color: ${theme.colors.surface.text3};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.surface.text2};
  }
`;
