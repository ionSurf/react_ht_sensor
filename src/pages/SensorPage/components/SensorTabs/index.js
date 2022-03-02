import React from "react";
import propTypes from "prop-types";
import Tabs from "../../../../components/Tabs";
import NaviBar from "../../../../components/NaviBar";
import { useTabs } from "../../../../components/Tabs/hooks";

const SensorTabs = ({ tabs, children }) => {
  const { activeTabId, setActiveTab } = useTabs({
    activeTabId: (tabs.length > 0 && tabs[0].id) ?? null,
    tabCount: 0,
    maxTabCount: 2,
  });
  console.log({ tabs, children });
  const routes = tabs.map((t) => ({
    ...t,
    title: t.name,
    route: `/sensor/${t.id}`,
    onClick: () => setActiveTab(t.id),
  }));

  return (
    <Tabs>
      <Tabs.Container>
        <Tabs.Body>{children(activeTabId)}</Tabs.Body>
        <NaviBar routes={routes} navigation={false} />
        {/* <Tabs.Navi>
          {tabs.map((t, i) => (
            <Tabs.NaviItem
              key={i}
              id={t.id}
              onClick={() => setActiveTab(t.id)}
              isActiveTab={activeTabId === t.id}
            >
              <Tabs.NaviAnchorItem>{`${t.name}`}</Tabs.NaviAnchorItem>
            </Tabs.NaviItem>
          ))}
        </Tabs.Navi> */}
      </Tabs.Container>
    </Tabs>
  );
};
SensorTabs.propTypes = {
  tabs: propTypes.arrayOf(propTypes.object),
  children: propTypes.func,
};

export default SensorTabs;
