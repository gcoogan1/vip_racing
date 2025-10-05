import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const NavbarContainer = styled.div`
  width: 100%;
  min-width: 704px;
  display: flex;
  justify-content: center;
  padding: 0px ${theme.layout.space.xlarge};
  background: linear-gradient(180deg, #160E0B 0%, rgba(22, 14, 11, 0) 100%);

  @media (max-width: 703px) {
		min-width: 360px;
    max-width: 703px;
    width: 100%;
}
`;

export const NavbarContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  gap: ${theme.layout.space.large};
  padding: ${theme.layout.space.large} 0px;
`

export const Logo = styled.div`
  height: 120px;
  width: 200px;
  cursor: pointer;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex: 1;
  gap: ${theme.layout.space.small};
`