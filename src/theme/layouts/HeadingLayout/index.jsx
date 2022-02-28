import React from "react";
import propTypes from "prop-types";

export default function HeadingLayout({ children }) {
  return <>{children}</>;
}
HeadingLayout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
