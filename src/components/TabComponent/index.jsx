import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MyWatchList from "../../components/MyWatchList";
import StockDataList from "../StockData";
import Orders from "../Orders";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: 0 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Stock data list" />
          <Tab label="My Watchlist" />
          <Tab label="Orders" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <StockDataList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/*  Display all the watchlist stocks here */}
        <MyWatchList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/*  Display all the Ordered stocks here */}
        <Orders />
      </TabPanel>
    </Box>
  );
}
