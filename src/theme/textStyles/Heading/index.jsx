import React from "react";
import propTypes from "prop-types";

const Heading = ({ children }) => <div>{children}</div>;
Heading.propTypes = {
  children: propTypes.string,
};
