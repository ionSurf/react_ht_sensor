import React from "react";
import propTypes from "prop-types";

export default function MainLayout({ children }) {
  return <>{children}</>;
}
MainLayout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
