import { ButtonContainer } from "./button.styles";

// NOTE: Remember to add width and height of 16px to svg icon

type ButtonProps = {
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "CTA";
};

const Button = ({ label, onClick, icon, variant = "primary" }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} $variant={variant}>
      {label}
      {icon}
    </ButtonContainer>
  )
}

export default Button