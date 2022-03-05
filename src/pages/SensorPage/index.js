import React from "react";
import SensorPageView from "./view";
import { SensorTabs } from "./components";
import Tabs from "../../components/Tabs";

import useWebSocketContext from "../../hooks/useWebSocketContext";

//  Pages
import {
  SensorSamplingPage,
  SensorStatisticsPage,
  SensorSettingsPage,
} from "../";

const SensorPage = () => {
  const { provider: WebSocketProvider } = useWebSocketContext;
  return (
    <WebSocketProvider value={{ endpoint: "ws://localhost:8888/ws" }}>
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
    </WebSocketProvider>
  );
};
export default SensorPage;
