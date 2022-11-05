import { Box, TextField, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const AttributesForm: React.FC = () => {
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
      ></Box>
    </Box>
  );
};

export default AttributesForm;
