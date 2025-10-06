import NavbarLink from "./navbarLink/navbarLink";
import DropdownMenu from "../dropdownMenu/dropdownMenu";
import GoldLogo from "../../assets/VIPGold.svg?react";
import { leagueLinks, menuLinks } from "../../appRoutes/linkLists";
import { useMediaQuery } from "../../util/hooks/useMediaQuery";
import {
  LinksContainer,
  Logo,
  NavbarContainer,
  NavbarContent,
} from "./navbar.styles";


const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 703px)");

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo>
          <GoldLogo width={200} height={120} />
        </Logo>
        <LinksContainer>
          {!isMobile ? (
            <>
              {menuLinks.map((link) => (
                <NavbarLink key={link.to} label={link.label} to={link.to} />
              ))}
              <DropdownMenu
                links={leagueLinks}
                menuLabel="Leagues"
              />
            </>
          ) : (
            <>
            <DropdownMenu 
                links={menuLinks}
                leagues={leagueLinks}
                menuLabel="Menu"
              />
            </>
          )}
        </LinksContainer>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
