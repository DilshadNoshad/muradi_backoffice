import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Avatar, ListItemAvatar } from "@mui/material";

const UsersList: React.FC = () => {
  return (
    <ListItem
      sx={{ backgroundColor: "white", mb: 1 }}
      secondaryAction={
        <Checkbox edge="start" inputProps={{ "aria-labelledby": "1" }} />
      }
      dense
      disablePadding
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            alt={`Avatar`}
            src={`https://mui.com/static/images/avatar/2.jpg`}
          />
        </ListItemAvatar>
        <ListItemText id="1" primary={`Dilshad Noshad`} />
      </ListItemButton>
    </ListItem>
  );
};

export default UsersList;
