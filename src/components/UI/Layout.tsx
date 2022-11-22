import { Box, CssBaseline, Toolbar } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

import SideBar from "../sidebar/SideBar";

const drawerWidth = 250;

const Layout = () => {
  // const Layout: React.FC<Component> = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <Box
        component="main"
        height="100%"
        minHeight="100vh"
        bgcolor="secondary.light"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
