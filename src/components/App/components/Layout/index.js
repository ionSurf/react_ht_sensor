import React from "react";
import propTypes from "prop-types";
import { Head, Body } from "./components";
import { Container, Box } from "../../../../theme/components";

const Layout = ({ children }) => (
  <Container disableGutters maxWidth={"false"}>
    <Box>{children}</Box>
  </Container>
);
Layout.propTypes = {
  children: propTypes.arrayOf(propTypes.object),
};
Layout.Head = Head;
Layout.Body = Body;

export default Layout;
