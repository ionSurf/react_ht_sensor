import React from "react";
import propTypes from "prop-types";
import { Heading as MuiHeading } from "../../../../theme/textStyles";

export default function Heading({ children }) {
  return <MuiHeading typography="h5">{children}</MuiHeading>;
}
Heading.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
