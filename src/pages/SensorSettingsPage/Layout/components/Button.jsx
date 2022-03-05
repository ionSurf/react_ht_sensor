import React from "react";
import propTypes from "prop-types";
import { Button as MuiButton } from "../../../../theme/components";

const Button = ({ onClick, children, ...props }) => (
  <MuiButton onClick={onClick} {...props}>
    {children}
  </MuiButton>
);

Button.propTypes = {
  props: propTypes.any,
  onClick: propTypes.func,
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Button;
