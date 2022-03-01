import React from "react";
import propTypes from "prop-types";
import { Container, Box } from "../../../../../../theme/components";

const Head = ({ children }) => (
  <Container disableGutters maxWidth={"false"}>
    <Box>{children}</Box>
  </Container>
);
Head.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Head;
