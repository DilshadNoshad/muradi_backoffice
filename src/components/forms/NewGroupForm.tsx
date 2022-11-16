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

const NewGroupForm: React.FC = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <form>
      <TextField
        fullWidth
        type="text"
        label="Title"
        sx={{ gridColumn: "span 4" }}
      />
      <Box display="flex" justifyContent="end" mt="20px">
        <Button type="submit" color="secondary" variant="contained">
          Create
        </Button>
      </Box>
    </form>
  );
};

export default NewGroupForm;
