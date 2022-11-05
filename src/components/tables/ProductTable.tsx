import React from "react";
import { Box, styled } from "@mui/material";

import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/MocData";

const StyledTable = styled(Box)(({ theme }) => ({
  margin: "16px 0 0 0",
  height: 500,

  "& .MuiDataGrid-root": {
    border: "none",
  },
  "& .MuiDataGrid-cell": {
    borderBottom: "none",
  },
  "& .name-column--cell": {
    color: theme.status.success,
  },
  "& .MuiDataGrid-columnHeaders": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
    borderBottom: "none",
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: "white",
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: "none",
    backgroundColor: theme.palette.primary.light,
    // borderRadius: "0 0 12px 12px",
  },
  "& .MuiTablePagination-root": {
    color: theme.palette.primary.main,
  },
  "& .MuiCheckbox-root": {
    color: theme.palette.secondary.dark,
  },
  "& .MuiDataGrid-toolbarContainer": {
    backgroundColor: theme.palette.primary.light,
  },
  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
  },
}));

const ProductTable: React.FC = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <StyledTable>
      <DataGrid
        sx={{ backgroundColor: "white" }}
        rows={mockDataContacts}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick
      />
    </StyledTable>
  );
};

export default ProductTable;
