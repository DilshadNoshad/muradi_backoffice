import React from "react";
import Title from "../components/header/Title";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
const Roles: React.FC = () => {
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title title="Roles" subtitle="Managing the Roles" />
        <Box>
          <Button
            variant="contained"
            component={Link}
            to="/create-role"
            sx={{ fontSize: "14px", padding: "10px 12px" }}
          >
            <AddIcon sx={{ mr: "4px" }} />
            Add New
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Roles;
