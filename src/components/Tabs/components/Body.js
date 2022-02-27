import React from "react";
import propTypes from "prop-types";

const Body = ({ children }) => {
  return <>{children}</>;
};
Body.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Body;
