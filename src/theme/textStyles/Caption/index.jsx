import React from "react";
import propTypes from "prop-types";
import { Box } from "@mui/material";

const Caption = ({ typography = "caption", children }) => (
  <Box sx={{ typography: typography }}>{children}</Box>
);
Caption.propTypes = {
  children: propTypes.string,
  typography: propTypes.string,
};
export default Caption;
