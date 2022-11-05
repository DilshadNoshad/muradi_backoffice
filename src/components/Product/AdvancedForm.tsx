import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const AdvancedForm: React.FC = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [country, setCountry] = React.useState("");
  const [vendor, setVendor] = React.useState("");

  const countryHandleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };
  const vendorHandleChange = (event: SelectChangeEvent) => {
    setVendor(event.target.value as string);
  };
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 300px"
      gridAutoRows="minmax(100px, auto)"
      gap="16px"
    >
      <Box
        gridColumn="1/3"
        sx={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
          p: 2,
        }}
      >
        {" "}
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <Typography
            variant="subtitle1"
            color="grey"
            sx={{ gridColumn: "1 / 2", padding: "10px 0 10px 0", m: "5px" }}
          >
            Meta Data
          </Typography>
          <TextField
            fullWidth
            hiddenLabel
            id="outlined-number"
            type="text"
            sx={{ gridColumn: "2 / 4" }}
          />
          <Typography
            variant="subtitle1"
            color="grey"
            sx={{ gridColumn: "1 / 2", padding: "10px 0 10px 0", m: "5px" }}
          >
            Vendor
          </Typography>
          <FormControl sx={{ gridColumn: "2 / 4" }} fullWidth>
            <Select
              displayEmpty
              id="vendor-select"
              value={vendor}
              onChange={vendorHandleChange}
            >
              <MenuItem disabled value="">
                <em>--- Select Vendor ---</em>
              </MenuItem>
              <MenuItem value={"1"}>Vendor1</MenuItem>
              <MenuItem value={"3"}>Vendor2</MenuItem>
              <MenuItem value={"4"}>Vendor3</MenuItem>
            </Select>
          </FormControl>
          <Typography
            variant="subtitle1"
            color="grey"
            sx={{ gridColumn: "1 / 2", padding: "10px 0 10px 0", m: "5px" }}
          >
            Country Of Manufacture
          </Typography>
          <FormControl sx={{ gridColumn: "2 / 4" }} fullWidth>
            <Select
              displayEmpty
              id="country-select"
              value={country}
              onChange={countryHandleChange}
            >
              <MenuItem disabled value="">
                <em>--- Select Country ---</em>
              </MenuItem>
              <MenuItem value={"Pak"}>Pakistan</MenuItem>
              <MenuItem value={"Ind"}>India</MenuItem>
              <MenuItem value={"Cn"}>China</MenuItem>
              <MenuItem value={"Mys"}>Malaysia</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default AdvancedForm;
