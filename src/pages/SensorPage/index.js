import React from "react";
import SensorPageView from "./view";
import { SensorTabs } from "./components";
import Tabs from "../../components/Tabs";

//  Pages
import {
  SensorSamplingPage,
  SensorStatisticsPage,
  SensorSettingsPage,
} from "../";

const SensorPage = () => {
  return (
    <SensorPageView>
      <SensorTabs
        tabs={[
          {
            id: "sampling",
            name: "Sampling",
          },
          {
            id: "statistics",
            name: "Statistics",
          },
          {
            id: "settings",
            name: "Settings",
          },
        ]}
      >
        {(activeTabId) => (
          <>
            <Tabs.Tab
              activeTabId={activeTabId}
              id={"sampling"}
              // title={"Sampling"}
            >
              <SensorSamplingPage />
            </Tabs.Tab>
            <Tabs.Tab
              activeTabId={activeTabId}
              id={"statistics"}
              // title={"Statistics"}
            >
              <SensorStatisticsPage />
            </Tabs.Tab>
            <Tabs.Tab
              activeTabId={activeTabId}
              id={"settings"}
              // title={"Statistics"}
            >
              <SensorSettingsPage />
            </Tabs.Tab>
          </>
        )}
      </SensorTabs>
    </SensorPageView>
  );
};
export default SensorPage;
