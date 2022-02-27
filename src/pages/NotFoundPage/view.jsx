import React from "react";
import propTypes from "prop-types";

const NotFoundPageView = ({ children }) => <>{children}</>;
NotFoundPageView.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default NotFoundPageView;
