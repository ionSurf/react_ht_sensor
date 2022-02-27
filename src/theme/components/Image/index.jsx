import React from "react";
import propTypes from "prop-types";

const Image = ({ classes = "", src = "", alt = "", ...props }) => (
  <img className={classes} src={src} alt={alt} {...props} />
);
Image.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  classes: propTypes.string,
};
export default Image;
