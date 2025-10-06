// NOTE: Remember to add width and height of 16px to svg icon

import { DropdownLinkContainer } from "./dropdownLink.styles";

type DropdownLinkProps = {
  to: string;
  label?: string;
  icon?: React.ReactNode;
};

const DropdownLink = ({ label, to, icon }: DropdownLinkProps) => {
  return (
    <DropdownLinkContainer to={to}>
      {label}
      {icon}
    </DropdownLinkContainer>
  )
}

export default DropdownLink