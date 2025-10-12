import ArrowDropDown from "../../assets/icon/ArrowDropDown.svg?react";
import ArrowDropUp from "../../assets/icon/ArrowDropUp.svg?react";
import { ButtonContainer } from "./showHideButton.styles";

type ShowHideButtonProps = {
  isVisible: boolean;
  onToggle: () => void;
};

const ShowHideButton = ({ isVisible, onToggle }: ShowHideButtonProps) => {
  return (
    <ButtonContainer onClick={onToggle}>
      {isVisible ? "Hide" : "Show"}
      {isVisible ? (
        <ArrowDropUp width={24} height={24} fill="currentColor" />
      ) : (
        <ArrowDropDown width={24} height={24} fill="currentColor" />
      )}
    </ButtonContainer>
  );
};

export default ShowHideButton;
