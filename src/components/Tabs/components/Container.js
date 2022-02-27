import React from "react";
import propTypes from "prop-types";

const Container = ({ children }) => {
  return <>{children}</>;
};
Container.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Container;
