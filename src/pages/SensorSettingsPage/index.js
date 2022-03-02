import React from "react";
import SettingsPageView from "./view";

import { RangesTab, SettingsTabs, UnitsTab, EndpointsTab } from "./components";
import Layout from "./Layout";
import Tabs from "../../components/Tabs";

const SensorSettingsPage = () => {
  return (
    <SettingsPageView>
      <Layout.SectionHeading>Settings</Layout.SectionHeading>
      <SettingsTabs
        tabs={[
          {
            id: "ranges",
            name: "Ranges",
          },
          {
            id: "units",
            name: "Units",
          },
          {
            id: "endpoints",
            name: "Endpoints",
          },
        ]}
      >
        {(activeTabId) => (
          <>
            <Tabs.Tab activeTabId={activeTabId} id={"ranges"}>
              <RangesTab />
            </Tabs.Tab>
            <Tabs.Tab activeTabId={activeTabId} id={"units"}>
              <UnitsTab />
            </Tabs.Tab>
            <Tabs.Tab activeTabId={activeTabId} id={"endpoints"}>
              <EndpointsTab />
            </Tabs.Tab>
          </>
        )}
      </SettingsTabs>
    </SettingsPageView>
  );
};
export default SensorSettingsPage;
