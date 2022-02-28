import React from "react";
import propTypes from "prop-types";
import { Button as MuiButton } from "@mui/material";

const Button = ({
  classes = "",
  onClick = () => {},
  variant = "outlined",
  children,
  ...props
}) => (
  <MuiButton onClick={onClick} className={classes} variant={variant} {...props}>
    {children}
  </MuiButton>
);
Button.propTypes = {
  onClick: propTypes.func,
  variant: propTypes.string,
  classes: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Button;
