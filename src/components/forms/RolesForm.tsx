import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import RoleTabs from "../tabs/RoleTabs";

const RolesForm: React.FC = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [parentCategory, setParentCategory] = React.useState("");

  const parentCatHandleChange = (event: SelectChangeEvent) => {
    setParentCategory(event.target.value as string);
  };

  return (
    <form>
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
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              fullWidth
              type="text"
              label="Title"
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
        </Box>
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
          <RoleTabs />
        </Box>
      </Box>
      <Box display="flex" justifyContent="end" mt="20px">
        <Button color="secondary" variant="contained">
          Create
        </Button>
      </Box>
    </form>
  );
};

export default RolesForm;
