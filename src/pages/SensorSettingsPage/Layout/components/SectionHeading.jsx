import React from "react";
import propTypes from "prop-types";
import { Heading } from "../../../../theme/textStyles/";

export default function SectionHeading({ children }) {
  return <Heading typography="h2">{children}</Heading>;
}
SectionHeading.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
