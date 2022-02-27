import React from "react";
import propTypes from "prop-types";
import Navi from "../../../Navi";
import { HeadingLayout } from "../../../../theme/layouts";

const Heading = ({ routes }) => {
  return (
    <HeadingLayout>
      <Navi routes={routes} />
    </HeadingLayout>
  );
};
Heading.propTypes = {
  routes: propTypes.arrayOf(propTypes.object),
};

export default Heading;
