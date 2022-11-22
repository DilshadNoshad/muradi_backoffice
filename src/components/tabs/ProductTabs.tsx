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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ProductTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        // maxWidth: { xs: 320, sm: 480, md: 1080 },
      }}
    >
      <Box display="flex" justifyContent="end" gap="2%" mb="20px">
        <Button color="secondary" variant="contained">
          Save
        </Button>
        <Button color="primary" variant="contained">
          Publish
        </Button>
      </Box>
      <Tabs
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "white",
          borderRadius: "12px",
        }}
      >
        <Tab label="General" {...a11yProps(0)} />
        <Tab label="Inventory" {...a11yProps(1)} />
        <Tab label="Shipping" {...a11yProps(2)} />
        <Tab label="Attributes" {...a11yProps(3)} />
        <Tab label="Advanced" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <GeneralForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InventoryForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ShippingForm />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AttributesForm />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AdvancedForm />
      </TabPanel>
    </Box>
  );
}
