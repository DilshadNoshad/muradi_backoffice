import React from 'react'
import Divider from '@mui/material/Divider';
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import TimelineIcon from '@mui/icons-material/Timeline';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
const SideBarMenus: React.FC = () => {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div>

            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>


                <ListItemButton onClick={handleClick} >
                    <ListItemIcon>

                        <InventoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Products" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>

                    <ListItem disablePadding  >
                        <ListItemButton component={Link} to="#" >
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary="All Products" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding  >
                        <ListItemButton component={Link} to="/add-product" >
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary="Add New" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding  >
                        <ListItemButton component={Link} to="#" >
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary="Categories" />
                        </ListItemButton>
                    </ListItem>
                </Collapse>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/create-users">
                        <ListItemIcon>
                            <PersonAddRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Create User" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/users">
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="#">
                        <ListItemIcon>
                            <ManageAccountsRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Role Assign" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="#">
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="#">
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Setting" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="#">
                        <ListItemIcon>
                            <ArticleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/graphs">
                        <ListItemIcon>
                            <TimelineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Graphs" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )
}

export default SideBarMenus