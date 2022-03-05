import React from "react";
import propTypes from "prop-types";
import { Container, Box } from "../../../../../../theme/components";

const Body = ({ children }) => (
  <Container disableGutters maxWidth={"false"}>
    <Box>{children}</Box>
  </Container>
);
Body.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Body;
