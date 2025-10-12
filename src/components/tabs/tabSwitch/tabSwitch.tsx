import TabSwitchLink from './tabSwitchLink/tabSwitchLink';
import { SwitchContainer } from './tabSwitch.styles'

type TabSwitchProps = {
  tabs?: Array<{ label: string; active: boolean; onClick: () => void }>;
}

const TabSwitch = ({ tabs }: TabSwitchProps) => {
  return (
    <SwitchContainer>
      {tabs?.map((tab, index) => (
        <TabSwitchLink key={index} label={tab.label} active={tab.active} onClick={tab.onClick} />
      ))}
    </SwitchContainer>
  )
}

export default TabSwitch