import React from "react";
import propTypes from "prop-types";

export default function Row({ children }) {
  return <>{children}</>;
}
Row.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
