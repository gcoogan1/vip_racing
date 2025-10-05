import ArrowDropDown from "../../../assets/icon/ArrowDropDown.svg?react";
import ArrowDropUp from "../../../assets/icon/ArrowDropUp.svg?react";
import { ButtonContainer } from "./dropdownButton.styles";
import { theme } from "../../../styles/theme";


// NOTE: Remember to add width and height of 16px to svg icon
type DropdownButtonProps = {
  onClick: () => void;
  isOpen: boolean;
  label?: string;
  insideMenu?: boolean;
};

const DropdownButton = ({ onClick, isOpen, label, insideMenu }: DropdownButtonProps) => {

  const buttonIcon = isOpen ? <ArrowDropUp width={16} height={16} fill="currentColor"  /> : <ArrowDropDown width={16} height={16} fill="currentColor"  />;

  return (
    <>
      {insideMenu ? (
        <ButtonContainer onClick={onClick} style={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
          {label}
          {buttonIcon}
        </ButtonContainer>
      ) : (
        <ButtonContainer onClick={onClick} style={isOpen ? { backgroundColor: theme.colors.surface.text1, color: theme.colors.surface.base } : {}}>
          {label}
          {buttonIcon}
        </ButtonContainer>
      )}
    </>
  )
}

export default DropdownButton