import React from "react";
const NaviItem = ({ children, isActiveTab, ...restProps }) => {
  return (
    <div {...restProps} className={isActiveTab ? `active-tab` : ``}>
      {children}
    </div>
  );
};
export default NaviItem;
