import React from "react";
import propTypes from "prop-types";
import { MainNaviBar } from "../../../../theme/Navigation";
import { HeadingLayout } from "../../../../theme/layouts";

const Heading = ({ routes }) => {
  return (
    <HeadingLayout>
      <MainNaviBar routes={routes} />
    </HeadingLayout>
  );
};
Heading.propTypes = {
  routes: propTypes.arrayOf(propTypes.object),
};

export default Heading;
