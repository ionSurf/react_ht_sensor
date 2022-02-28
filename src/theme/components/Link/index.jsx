import React from "react";
import propTypes from "prop-types";
import { Link as MuiLink } from "@mui/material";

const Link = ({
  classes = "",
  src = "",
  children,
  onClick = () => {},
  ...props
}) => (
  <MuiLink className={classes} src={src} onClick={onClick} {...props}>
    {children}
  </MuiLink>
);
Link.propTypes = {
  src: propTypes.string,
  onClick: propTypes.func,
  classes: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Link;
