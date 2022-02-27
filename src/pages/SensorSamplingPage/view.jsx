import React from "react";
import propTypes from "prop-types";

const SensorSamplingPageView = ({ children }) => <>{children}</>;
SensorSamplingPageView.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default SensorSamplingPageView;
