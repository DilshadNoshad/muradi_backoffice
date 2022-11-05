import React from "react";
import UsersTable from "../components/tables/UsersTable";
import Title from "../components/header/Title";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
const Categories: React.FC = () => {
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title
          title="Product Categories"
          subtitle="Managing the Product Categories"
        />
        <Box>
          <Button
            variant="contained"
            component={Link}
            to="/create-category"
            sx={{ fontSize: "14px", padding: "10px 12px" }}
          >
            <AddIcon sx={{ mr: "4px" }} />
            Add New
          </Button>
        </Box>
      </Box>
      <UsersTable />
    </React.Fragment>
  );
};

export default Categories;
