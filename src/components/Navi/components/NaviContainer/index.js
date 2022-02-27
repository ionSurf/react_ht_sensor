import React from "react";
import propTypes from "prop-types";

const NaviContainer = ({ classes, children }) => (
  <nav className={classes}>{children}</nav>
);
NaviContainer.propTypes = {
  classes: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default NaviContainer;
