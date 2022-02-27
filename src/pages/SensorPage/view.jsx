import React from "react";
import propTypes from "prop-types";

const SensorPageView = ({ children }) => <>{children}</>;
SensorPageView.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default SensorPageView;
