import React from "react";
import propTypes from "prop-types";
import { Grid as MuiGrid } from "@mui/material";

const Grid = ({ classes = "", children, ...props }) => (
  <MuiGrid className={classes} {...props}>
    {children}
  </MuiGrid>
);
Grid.propTypes = {
  classes: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Grid;
