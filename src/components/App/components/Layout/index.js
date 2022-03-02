import React from "react";
import propTypes from "prop-types";
import { Head, Body } from "./components";
import { Container, Box } from "../../../../theme/components";
// import { useTheme } from "@mui/material";

const Layout = ({ children }) => {
  // const theme = useTheme();
  return (
    <Container
      // sx={{
      //   backgroundColor: "background.default",
      // }}
      disableGutters
      maxWidth={"false"}
    >
      <Box>{children}</Box>
    </Container>
  );
};
Layout.propTypes = {
  children: propTypes.arrayOf(propTypes.object),
};
Layout.Head = Head;
Layout.Body = Body;

export default Layout;
