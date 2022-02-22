import React from "react";
import { MainNaviBar } from "../../../Theme/Navigation";
import { HeadingLayout } from "../../../Theme/Layouts";

const Heading = ({ routes }) => {
  return (
    <HeadingLayout>
      <MainNaviBar routes={routes} />
    </HeadingLayout>
  );
};
export default Heading;
