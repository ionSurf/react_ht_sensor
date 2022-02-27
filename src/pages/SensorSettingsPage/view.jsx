import React from "react";
import propTypes from "prop-types";

const SettingsPageView = ({ children }) => <>{children}</>;
SettingsPageView.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default SettingsPageView;
