import React from "react";
import propTypes from "prop-types";
import { Box } from "@mui/material";

const ButtonText = ({ typography = "button", children }) => (
  <Box sx={{ typography: typography }}>{children}</Box>
);
ButtonText.propTypes = {
  children: propTypes.string,
  typography: propTypes.string,
};
export default ButtonText;
