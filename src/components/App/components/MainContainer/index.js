import React from "react";
import propTypes from "prop-types";
import { MainLayout } from "../../../../theme/layouts";

const MainContainer = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};
MainContainer.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};

export default MainContainer;
