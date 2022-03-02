import React from "react";
import propTypes from "prop-types";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
Button.propTypes = {
  onClick: propTypes.func,
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Button;
