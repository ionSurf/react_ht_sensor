import React from "react";
import propTypes from "prop-types";

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
GlobalContextProvider.propTypes = {
  value: propTypes.object,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};

export { GlobalContext, GlobalContextProvider, GlobalContextInitialState };
