import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

const SideBarList: React.FC = () => {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <PersonAddRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create User" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <ManageAccountsRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Role Assign" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Setting" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default SideBarList;