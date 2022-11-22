import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import { theme } from "../../theme";

import { Typography } from "@mui/material";

const RightsList: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Accordion
      expanded={expanded === "panel4"}
      onChange={handleChange("panel4")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4bh-content"
        id="panel4bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>Roles</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ListItem
          sx={{
            backgroundColor: `${theme.palette.primary.light}`,
            mb: 1,
          }}
          disablePadding
        >
          <ListItemButton
            // role={undefined}
            // onClick={handleToggle(value)}
            dense
          >
            <ListItemText id={"labelId"} primary={`Edit`} />
            <ListItemIcon>
              <Checkbox
                edge="end"
                // checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": "labelId" }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </AccordionDetails>
    </Accordion>
  );
};

export default RightsList;
