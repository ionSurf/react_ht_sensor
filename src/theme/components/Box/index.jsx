import React from "react";
import propTypes from "prop-types";
import { Box as MuiBox } from "@mui/material";

const Box = ({ classes = "", component = "div", sx, children, ...props }) => (
  <MuiBox sx={sx} component={component} className={classes} {...props}>
    {children}
  </MuiBox>
);
Box.propTypes = {
  sx: propTypes.object,
  classes: propTypes.string,
  component: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Box;
