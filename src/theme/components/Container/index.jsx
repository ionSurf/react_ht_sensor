import React from "react";
import propTypes from "prop-types";
import { Container as MuiContainer } from "@mui/material";

const Container = ({ classes = "", children, maxWidth = "sm", ...props }) => (
  <MuiContainer maxWidth={maxWidth} className={classes} {...props}>
    {children}
  </MuiContainer>
);
Container.propTypes = {
  classes: propTypes.string,
  maxWidth: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Container;
