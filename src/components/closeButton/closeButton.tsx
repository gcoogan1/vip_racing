import { ButtonContainer, Text } from "./closeButton.styles"
import Close from "../../assets/icon/Close.svg?react";

type CloseButtonProps = {
  onClick: () => void;
};

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      <Text>Close</Text><Close />
    </ButtonContainer>
  )
}

export default CloseButton;
