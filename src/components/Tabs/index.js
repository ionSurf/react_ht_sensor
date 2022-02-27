import React from "react";
import propTypes from "prop-types";
import { TabsProvider } from "./hooks/useTabsContext";
import {
  Body,
  Container,
  Header,
  Navi,
  NaviItem,
  NaviAnchorItem,
  Tab,
} from "./components";

const Tabs = ({ children }) => {
  const getState = () => {};
  return (
    <TabsProvider value={{ state: getState(), dispatch: () => {} }}>
      {children}
    </TabsProvider>
  );
};
Tabs.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};

Tabs.NaviAnchorItem = NaviAnchorItem;
Tabs.Container = Container;
Tabs.NaviItem = NaviItem;
Tabs.Header = Header;
Tabs.Navi = Navi;
Tabs.Body = Body;
Tabs.Tab = Tab;

export default Tabs;
