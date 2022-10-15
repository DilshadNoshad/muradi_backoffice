
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import React from 'react';
import styled from "@emotion/styled";
import { Avatar, Typography } from "@mui/material";
import SideBarMenus from './SideBarMenus';
const drawerWidth = 240;


export default function SideBar() {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px'
    }));

    const StyledLogo = styled("div")(({ theme }) => ({
        backgroundColor: '#E3F2FD',
        color: '#E3F2FD',
        boxShadow: `0 0 0 2px #eee`,
        padding: "8px",
        borderRadius: "50%",


    }));


    return (


        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer

                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <SideBarMenus />
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                <DrawerHeader>
                    {/* <Avatar /> */}
                    <StyledLogo

                    >
                        <Avatar sx={{ width: 80, height: 80 }} alt="Travis Howard" src="https://avatars.githubusercontent.com/u/68327502?v=4" />
                    </StyledLogo>
                    <Typography variant="h6" component="span" >Dilshad</Typography>
                </DrawerHeader>

                <SideBarMenus />
            </Drawer>
        </Box>


    );
}
