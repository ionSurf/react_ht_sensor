import React from "react";
import propTypes from "prop-types";

const HomePageView = ({ children }) => <>{children}</>;
HomePageView.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};

export default HomePageView;
