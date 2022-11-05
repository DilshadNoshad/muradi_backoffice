import { Box, TextField, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const ShippingForm: React.FC = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
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
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(6, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <Typography
            variant="subtitle1"
            color="grey"
            sx={{ gridColumn: "1 / 2", padding: "10px 0 10px 0", m: "5px" }}
          >
            Weight (lbs)
          </Typography>
          <TextField
            fullWidth
            hiddenLabel
            id="outlined-number"
            type="number"
            sx={{ gridColumn: "2 / 5" }}
          />
          <Typography
            variant="subtitle1"
            color="grey"
            sx={{ gridColumn: "1 / 2", padding: "10px 0 10px 0", m: "5px" }}
          >
            Dimensions (cm)
          </Typography>
          <TextField
            fullWidth
            label="Length"
            id="outlined-number"
            type="number"
            sx={{ gridColumn: "2 / 3" }}
          />
          <TextField
            fullWidth
            label="Width"
            id="outlined-number"
            type="number"
            sx={{ gridColumn: "3 / 4" }}
          />
          <TextField
            fullWidth
            label="Height"
            id="outlined-number"
            type="number"
            sx={{ gridColumn: "4 / 5" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ShippingForm;
