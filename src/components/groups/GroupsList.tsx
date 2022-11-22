import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListItemIcon from "@mui/material/ListItemIcon";

const GroupsList: React.FC = () => {
  return (
    <ListItem sx={{ backgroundColor: "white", mb: 1 }} disablePadding>
      <ListItemButton
        // role={undefined}
        // onClick={handleToggle(value)}
        dense
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            // checked={checked.indexOf(value) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": "labelId" }}
          />
        </ListItemIcon>
        <ListItemText id={"labelId"} primary={`The Group name`} />
      </ListItemButton>
    </ListItem>
  );
};

export default GroupsList;
