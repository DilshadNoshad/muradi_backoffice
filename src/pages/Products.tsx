import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/header/Title";
import ProductTable from "../components/tables/ProductTable";
import AddIcon from "@mui/icons-material/Add";
const Products: React.FC = () => {
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title title="Products" subtitle="Managing the Products" />
        <Box>
          <Button
            variant="contained"
            component={Link}
            to="/add-product"
            sx={{ fontSize: "14px", padding: "10px 12px" }}
          >
            <AddIcon sx={{ mr: "4px" }} />
            Add New
          </Button>
        </Box>
      </Box>
      <ProductTable />
    </React.Fragment>
  );
};

export default Products;
