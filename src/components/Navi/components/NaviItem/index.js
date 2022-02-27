import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const NaviItem = ({ classes = "", route = "", children, ...restProps }) => (
  <nav className={classes}>
    <Link to={route} {...restProps}>
      {children}
    </Link>
  </nav>
);
NaviItem.propTypes = {
  route: propTypes.string,
  classes: propTypes.string,
  restProps: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default NaviItem;
