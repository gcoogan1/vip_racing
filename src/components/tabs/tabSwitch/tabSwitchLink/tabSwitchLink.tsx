import { ButtonContainer, ButtonText } from "./tabSwitchLink.styles"

type TabSwitchProps = {
  label?: string;
  active?: boolean;
  onClick?: () => void;
};

const TabSwitchLink = ({ label, active = false, onClick }: TabSwitchProps) => {
  return (
    <ButtonContainer $active={active} onClick={onClick}>
      <ButtonText $active={active}>{label}</ButtonText>
    </ButtonContainer>
  )
}

export default TabSwitchLink