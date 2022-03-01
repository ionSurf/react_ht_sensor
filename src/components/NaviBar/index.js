import React from "react";
import propTypes from "prop-types";
import { AppBar, Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const NaviBar = ({ routes }) => {
  const navigate = useNavigate();
  const [_tabIndex, set_tabIndex] = React.useState(0);

  const handleChange = (tabIndex) => {
    navigate(routes[tabIndex].route);
    set_tabIndex(tabIndex);
  };

  return (
    <AppBar position="static">
      <Tabs
        value={_tabIndex}
        onChange={(e, i) => handleChange(i)}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        {routes.map((r) => (
          <Tab
            key={r.id}
            label={r.title}
            {...a11yProps(r.id, r.routes)}
            wrapped={true}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};
NaviBar.propTypes = {
  routes: propTypes.arrayOf(propTypes.object),
};
export default NaviBar;
