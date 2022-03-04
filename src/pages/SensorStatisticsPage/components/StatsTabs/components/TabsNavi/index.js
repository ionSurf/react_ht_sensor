import * as React from "react";
import propTypes, { oneOfType } from "prop-types";
import { Tabs, Tab, Box } from "@mui/material";

export default function TabsNavi({ tabs, activeTabId, setActiveTab }) {
  const [value, setValue] = React.useState(activeTabId);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
      >
        {tabs.map((t) => (
          <Tab key={t.id} value={t.id} label={t.name} />
        ))}
      </Tabs>
    </Box>
  );
}
TabsNavi.propTypes = {
  tabs: propTypes.arrayOf(propTypes.object),
  setActiveTab: propTypes.func,
  activeTabId: oneOfType([propTypes.number, propTypes.string]),
};
