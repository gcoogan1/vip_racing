import { useState } from "react";
import TabLink from "./tabLink/tabLink";
import { TabContainer } from "./tabMenu.styles"

type Tabs  = {
  id: string
  label: string
}

type TabMenuProps = {
  tabs: Tabs[]
};

const TabMenu = ({ tabs }: TabMenuProps) => {
  // Move state/func to parent and add default tab open
  const [activeTab, setActiveTab] = useState<string>("");
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabLink key={tab.id} label={tab.label} active={tab.id === activeTab} onClick={() => handleTabChange(tab.id)} />
      ))}
    </TabContainer>
  )
}

export default TabMenu;