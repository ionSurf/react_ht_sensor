import React from "react";
const GlobalContext = React.createContext({
  state: {},
  dispatch: () => {},
});

const GlobalContextInitialState = {
  units: "F",
  ranges: {
    humidity: {
      min: 35,
      max: 80,
    },
    temperature: {
      min: 5,
      max: 90,
    },
  },
  endpoints: [],
};

const GlobalContextProvider = ({ children, value }) => (
  <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
);

export { GlobalContext, GlobalContextProvider, GlobalContextInitialState };
