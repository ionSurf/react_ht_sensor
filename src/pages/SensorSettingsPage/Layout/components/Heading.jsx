import React from "react";
import propTypes from "prop-types";

export default function Heading({ children }) {
  return <>{children}</>;
}
Heading.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
