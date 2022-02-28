import React from "react";
import propTypes from "prop-types";
import { Box } from "@mui/material";

const Heading = ({ typography = "h1", children }) => (
  <Box sx={{ typography: typography }}>{children}</Box>
);
Heading.propTypes = {
  children: propTypes.string,
  typography: propTypes.string,
};
export default Heading;
