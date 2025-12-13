import { ButtonContainer } from "./button.styles";

// NOTE: Remember to add width and height of 16px to svg icon

type ButtonProps = {
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
  isDisabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "CTA";
};

const Button = ({ label, onClick, icon, variant = "primary", isDisabled }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} $variant={variant} disabled={isDisabled}>
      {label}
      {icon}
    </ButtonContainer>
  )
}

export default Button