import React from "react";
import propTypes from "prop-types";
import { Box } from "@mui/material";

const BodyText = ({ typography = "body1", children }) => (
  <Box sx={{ typography: typography }}>{children}</Box>
);
BodyText.propTypes = {
  children: propTypes.string,
  typography: propTypes.string,
};
export default BodyText;
