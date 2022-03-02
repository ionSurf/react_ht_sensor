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

const NaviBar = ({ routes, navigation = true }) => {
  const navigate = useNavigate();
  const [_tabIndex, set_tabIndex] = React.useState(0);

  const handleChange = (tabIndex, navigation) => {
    navigation && navigate(routes[tabIndex].route);
    routes[tabIndex].onClick?.();
    set_tabIndex(tabIndex);
  };

  return (
    <AppBar position="static">
      <Tabs
        value={_tabIndex}
        onChange={(e, i) => handleChange(i, navigation)}
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
  navigation: propTypes.bool,
  routes: propTypes.arrayOf(propTypes.object),
};
export default NaviBar;
