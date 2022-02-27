import React from "react";
import propTypes from "prop-types";

const Tab = ({ activeTabId, id, children }) => {
  return activeTabId === id && <>{children}</>;
};
Tab.propTypes = {
  id: propTypes.oneOfType([propTypes.number, propTypes.string]),
  activeTabId: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Tab;
