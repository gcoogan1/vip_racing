import TabLink from "./tabLink/tabLink";
import { TabContainer } from "./tabMenu.styles"

type Tabs  = {
  id: string
  label: string
}

type TabMenuProps = {
  tabs: Tabs[],
  activeTab?: string,
  onTabChange?: (tabId: string) => void
};

const TabMenu = ({ tabs, activeTab, onTabChange }: TabMenuProps) => {

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabLink key={tab.id} label={tab.label} active={tab.id === activeTab} onClick={() => onTabChange?.(tab.id)} />
      ))}
    </TabContainer>
  )
}

export default TabMenu;