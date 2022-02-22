import React from "react";

const Tab = ({ activeTabId, id, children }) => {
  return activeTabId === id && <>{children}</>;
};
export default Tab;
