import { ButtonContainer } from "./button.styles";
import ArrowRight from "../../assets/icon/ArrowRight.svg?react";

type ButtonProps = {
  label: string;
  onClick: () => void;
};
  
const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
      <ArrowRight className="icon" width={16} height={16}/>
    </ButtonContainer>
  )
}

export default Button