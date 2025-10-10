import NavbarLink from "./navbarLink/navbarLink";
import DropdownMenu from "../dropdownMenu/dropdownMenu";
import GoldLogo from "../../assets/VIPGold.svg?react";
import { vipLeagues, menuLinks } from "../../appRoutes/linkLists";
import { useMediaQuery } from "../../util/hooks/useMediaQuery";
import {
  LinksContainer,
  Logo,
  NavbarContainer,
  NavbarContent,
} from "./navbar.styles";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 703px)");
  const navigate = useNavigate()

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo onClick={() => navigate("/")}>
          <GoldLogo width={200} height={120} />
        </Logo>
        <LinksContainer>
          {!isMobile ? (
            <>
              {menuLinks.map((link) => (
                <NavbarLink key={link.to} label={link.label} to={link.to} />
              ))}
              <DropdownMenu
                links={vipLeagues}
                menuLabel="Leagues"
              />
            </>
          ) : (
            <>
            <DropdownMenu 
                links={menuLinks}
                leagues={vipLeagues}
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
