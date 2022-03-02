import React from "react";
import propTypes from "prop-types";

export default function SectionHeading({ children }) {
  return <>{children}</>;
}
SectionHeading.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
