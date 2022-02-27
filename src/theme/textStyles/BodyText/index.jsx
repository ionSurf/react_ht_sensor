import React from "react";
import propTypes from "prop-types";

const BodyText = ({ children }) => <p>{children}</p>;
BodyText.propTypes = {
  children: propTypes.string,
};
