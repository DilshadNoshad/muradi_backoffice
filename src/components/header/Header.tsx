import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

// const Search = styled("div")(({ theme }) => ({
//     backgroundColor: "white",
//     padding: "0 10px",
//     width: "40%",
//     borderRadius: theme.shape.borderRadius
// }))
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  // width: '100%',
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
      "&:focus": {
        width: "55ch",
      },
    },
  },
}));

const StyledLogo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.secondary.main,
  boxShadow: `0 0 0 2px #eee`,
  padding: "4px 8px",
  borderRadius: "27px",
  marginLeft: "10px",
  "&:hover": {
    backgroundColor: "rgb(237, 231, 246)",
    color: "white",
    cursor: "pointer",
  },
}));

type ButtonProps = {
  onHandleDrawerToggle: (params: any) => any;
};
const Header = ({ onHandleDrawerToggle }: ButtonProps) => {
  const authCtx = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login", { replace: true });
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <StyledToolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onHandleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        {/* <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Dashboard</Typography> */}
        {/* <DashboardIcon sx={{ display: { xs: "block", sm: "none" } }} /> */}
        {/* <Search > */}
        {/* <InputBase placeholder="Search..." sx={{ width: "100%" }} /> */}
        {/* </Search> */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Icons>
          <Badge color="error" badgeContent={1}>
            <EmailOutlinedIcon />
          </Badge>
          <Badge color="error" badgeContent={100}>
            <NotificationsNoneOutlinedIcon />
          </Badge>
          <StyledLogo onClick={handleClick}>
            <Avatar
              sx={{ width: 30, height: 30, mr: 1 }}
              alt="Travis Howard"
              src="https://avatars.githubusercontent.com/u/68327502?v=4"
            />
            <SettingsOutlinedIcon />
          </StyledLogo>
        </Icons>
        <UserBox onClick={handleClick}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Travis Howard"
            src="https://avatars.githubusercontent.com/u/68327502?v=4"
          />
          <Typography component="span">Dilshad</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
