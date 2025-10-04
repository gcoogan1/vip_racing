import { ButtonContainer } from "./button.styles";

// NOTE: Remember to add width and height of 16px to svg icon

type ButtonProps = {
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
};

const Button = ({ label, onClick, icon }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
      {icon}
    </ButtonContainer>
  )
}

export default Button