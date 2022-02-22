import React from "react";
import Tabs from "../../../../components/Tabs";
import { useTabs } from "../../../../components/Tabs/hooks";

const SettingsTabs = ({ tabs, children }) => {
  const { activeTabId, setActiveTab } = useTabs({
    activeTabId: (tabs.length > 0 && tabs[0].id) ?? null,
    tabCount: 0,
    maxTabCount: 3,
  });
  // console.log("setings tabs", { activeTabId, tabs });

  return (
    <Tabs>
      <Tabs.Body>{children(activeTabId)}</Tabs.Body>
      <Tabs.Navi>
        {tabs.map((t) => (
          <Tabs.NaviItem
            key={t.id}
            id={t.id}
            onClick={() => setActiveTab(t.id)}
            isActiveTab={activeTabId === t.id}
          >
            <Tabs.NaviAnchorItem>{`${t.name}`}</Tabs.NaviAnchorItem>
          </Tabs.NaviItem>
        ))}
      </Tabs.Navi>
    </Tabs>
  );
};
export default SettingsTabs;
