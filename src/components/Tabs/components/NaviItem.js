import React from "react";
import propTypes from "prop-types";

const NaviItem = ({ children, isActiveTab, ...restProps }) => {
  return (
    <div {...restProps} className={isActiveTab ? `active-tab` : ``}>
      {children}
    </div>
  );
};
NaviItem.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
  isActiveTab: propTypes.bool,
};
export default NaviItem;
