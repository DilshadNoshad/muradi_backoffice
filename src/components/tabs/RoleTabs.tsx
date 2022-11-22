import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import GeneralForm from "../product/GeneralForm";
import InventoryForm from "../product/InventoryForm";
import ShippingForm from "../product/ShippingForm";
import AttributesForm from "../product/AttributesForm";
import AdvancedForm from "../product/AdvancedForm";
import { Button } from "@mui/material";
import GeneralTable from "../tables/roles/GeneralTable";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function RoleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      //   sx={{
      //     flexGrow: 1,
      //     maxWidth: { xs: 320, sm: 480, md: 1080 },
      //   }}
      sx={{
        flexGrow: 1,
        display: "flex",
        height: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="General" {...a11yProps(0)} />
        <Tab label="Inventory" {...a11yProps(1)} />
        <Tab label="Shipping" {...a11yProps(2)} />
        <Tab label="Attributes" {...a11yProps(3)} />
        <Tab label="Advanced" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <GeneralTable />
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
      <TabPanel value={value} index={4}></TabPanel>
    </Box>
  );
}
