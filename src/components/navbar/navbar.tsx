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
import Button from "../button/button";


const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 703px)");
  const navigate = useNavigate()

  const handleLeaguesClick = () => {
    const url = "https://motorsportleagues.com/";
    return window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo onClick={() => navigate("/")}>
          <GoldLogo width="100%" height="100%" />
        </Logo>
        <LinksContainer>
          {!isMobile ? (
            <>
              {menuLinks.map((link) => (
                <NavbarLink key={link.to} label={link.label} to={link.to} />
              ))}
              {/* <DropdownMenu
                links={vipLeagues}
                menuLabel="Leagues"
              /> */}
              <Button onClick={handleLeaguesClick} label="Our Leagues" />
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
