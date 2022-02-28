import React from "react";
import propTypes from "prop-types";

const NaviAnchorItem = ({ children }) => {
  return <>{children}</>;
};
NaviAnchorItem.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default NaviAnchorItem;
