import React from "react";
import propTypes from "prop-types";

const Container = ({ classes = "", children, ...props }) => (
  <div className={classes} {...props}>
    {children}
  </div>
);
Container.propTypes = {
  classes: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default Container;
