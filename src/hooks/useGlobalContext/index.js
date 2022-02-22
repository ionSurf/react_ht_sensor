import React from "react";
import { GlobalContext } from "../../contexts";

const useGlobalContext = () => {
  const context = React.useContext(GlobalContext);
  if (context === undefined)
    throw new console.error(
      "useGlobalContext must be used with a GlobalContextProvider"
    );

  return context;
};
export default useGlobalContext;
