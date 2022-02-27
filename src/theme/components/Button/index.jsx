import React from "react";
import propTypes from "prop-types";

const Button = ({ classes = "", onClick = () => {}, children }) => (
  <button onClick={onClick} className={classes}>
    {children}
  </button>
);
Button.propTypes = {
  onClick: propTypes.func,
  classes: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Button;
