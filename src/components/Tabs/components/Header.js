import React from "react";
import propTypes from "prop-types";

const Header = ({ children }) => {
  return <>{children}</>;
};
Header.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Header;
