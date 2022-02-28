import React from "react";
import propTypes from "prop-types";
import { Box } from "@mui/material";

const Subtitle = ({ typography = "subtitle1", children }) => (
  <Box sx={{ typography: typography }}>{children}</Box>
);
Subtitle.propTypes = {
  children: propTypes.string,
  typography: propTypes.string,
};
export default Subtitle;
