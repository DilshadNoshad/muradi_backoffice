import { Box, CssBaseline, Toolbar } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import SideBar from '../sidebar/SideBar'

const drawerWidth = 240;
interface Component {

    children: React.ReactNode
}
const Layout = (props: PropsWithChildren<Component>) => {
    // const Layout: React.FC<Component> = (props) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <SideBar />
            <Box
                component="main"
                height="100%"
                minHeight="100vh"
                bgcolor="secondary.light"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    )
}

export default Layout;