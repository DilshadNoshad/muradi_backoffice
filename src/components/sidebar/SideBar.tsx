import styled from "@emotion/styled";
import { Avatar, Badge, Box, Divider, Drawer, Typography } from "@mui/material";
import SideBarList from "./SideBarList";
const drawerWidth = 240;

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
const SideBar: React.FC = () => {


    return (
        <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders">
            {/* <Drawer
                container={container}
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
                <SideBarList />
            </Drawer> */}
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
                <Divider />
                <SideBarList />
            </Drawer>
        </Box >
    );
};

export default SideBar;
