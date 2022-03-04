import React from "react";
import propTypes from "prop-types";
import Tabs from "../../../../components/Tabs";
import { useTabs } from "../../../../components/Tabs/hooks";

//  TODO :: Integrate in Tabs elements
import { TabsNavi } from "./components";

const StatsTabs = ({ tabs, children }) => {
  const { activeTabId, setActiveTab } = useTabs({
    activeTabId: (tabs.length > 0 && tabs[0].id) ?? null,
    tabCount: 0,
    maxTabCount: 3,
  });
  StatsTabs.propTypes = {
    tabs: propTypes.arrayOf(propTypes.object),
    children: propTypes.oneOfType([
      propTypes.any,
      propTypes.string,
      propTypes.object,
      propTypes.arrayOf(propTypes.object),
    ]),
  };

  return (
    <Tabs>
      <TabsNavi
        tabs={tabs}
        activeTabId={activeTabId}
        setActiveTab={setActiveTab}
      />
      <Tabs.Body>{children(activeTabId)}</Tabs.Body>
      {/* <Tabs.Navi>
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
      </Tabs.Navi> */}
    </Tabs>
  );
};
export default StatsTabs;
