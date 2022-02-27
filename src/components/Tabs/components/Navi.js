import React from "react";
import propTypes from "prop-types";

const Navi = ({ children }) => {
  return <>{children}</>;
};
Navi.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Navi;
