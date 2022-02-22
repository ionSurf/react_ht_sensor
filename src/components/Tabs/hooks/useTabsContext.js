import React from "react";

const TabsContext = React.createContext();

const TabsProvider = ({ children, value }) => (
  <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
);

const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (context === undefined)
    throw new console.error(
      "useTabsContext must be used within a TabsProvider"
    );
  return context;
};
export { useTabsContext, TabsProvider };
