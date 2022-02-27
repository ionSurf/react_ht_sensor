import React from "react";
import propTypes from "prop-types";

const Anchor = ({ classes = "", src = "", children, ...props }) => (
  <a className={classes} src={src} {...props}>
    {children}
  </a>
);
Anchor.propTypes = {
  src: propTypes.string,
  classes: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Anchor;
