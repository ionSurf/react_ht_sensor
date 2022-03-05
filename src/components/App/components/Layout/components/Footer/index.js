import React from "react";
import propTypes from "prop-types";
import { Container, Box } from "../../../../../../theme/components";

const Footer = ({ children }) => (
  <Container disableGutters maxWidth={false}>
    <Box>{children}</Box>
  </Container>
);
Footer.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Footer;
