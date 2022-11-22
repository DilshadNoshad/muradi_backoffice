import React from "react";
import { Avatar, Box, styled, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/MocData";
import UserActions from "../actions/UserActions";

const StyledTable = styled(Box)(({ theme }) => ({
  margin: "20px 0 0 0",
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
  },
  "& .MuiTablePagination-root": {
    color: theme.palette.primary.main,
  },
  "& .MuiCheckbox-root": {
    color: theme.palette.secondary.dark,
  },
}));

const UsersTable: React.FC = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    {
      field: "photo",
      headerName: "Photo",
      align: "left",
      renderCell: (avt) => (
        <Tooltip title={avt.row.name}>
          <Avatar src={avt.row.photo} sx={{ width: 46, height: 46 }} />
        </Tooltip>
      ),
    },
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
      field: "actions",
      headerName: "Actions",
      flex: 1,
      type: "actions",
      renderCell: (act) => <UserActions />,
    },
  ];
  return (
    <StyledTable>
      <DataGrid
        sx={{ backgroundColor: "white" }}
        rows={mockDataTeam}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick
      />
    </StyledTable>
  );
};

export default UsersTable;
