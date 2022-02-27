import React from "react";
import propTypes from "prop-types";

const SensorStatisticsPageView = ({ children }) => <>{children}</>;
SensorStatisticsPageView.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default SensorStatisticsPageView;
