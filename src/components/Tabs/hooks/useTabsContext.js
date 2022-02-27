import React from "react";
import propTypes from "prop-types";

const TabsContext = React.createContext();

const TabsProvider = ({ children, value }) => (
  <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
);
TabsProvider.propTypes = {
  value: propTypes.object,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};

const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (context === undefined)
    throw new console.error(
      "useTabsContext must be used within a TabsProvider"
    );
  return context;
};
export { useTabsContext, TabsProvider };
