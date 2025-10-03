import { NavbarLinkContainer } from "./navbarLink.styles";

type NavbarLinkProps = {
  label: string;
  to: string;
}

const NavbarLink = ({ label, to }: NavbarLinkProps) => {
  return (
    <NavbarLinkContainer to={to}>{label}</NavbarLinkContainer>
  )
}

export default NavbarLink