import { TabButtonContainer } from './tabButton.styles'

//TODO: Add active state to parent container

type TabButtonProps = {
  label?: string;
  active?: boolean;
  onClick?: () => void;
  isDisabled?: boolean;
};

const TabButton = ({ label, onClick, isDisabled, active = false }: TabButtonProps) => {
  return (
    <TabButtonContainer onClick={onClick} disabled={isDisabled} $active={active}>
      {label}
    </TabButtonContainer>
  )
}

export default TabButton;