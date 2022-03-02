import React from "react";
import propTypes from "prop-types";

export default function Column({ children }) {
  return <>{children}</>;
}
Column.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
