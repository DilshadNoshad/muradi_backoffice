import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Modal,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import { theme } from "../../theme";
import { Link } from "react-router-dom";
import NewGroupForm from "../forms/NewGroupForm";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Groups() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    bgcolor: "white",
    borderRadius: "16px",
    boxShadow: 24,
    p: 4,
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gridAutoRows="minmax(500px, auto)"
      gap="16px"
    >
      <Box
        gridColumn="1/2"
        sx={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
          p: 2,
        }}
      >
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <Box sx={{ gridColumn: "span 4" }}>
            <Typography
              borderBottom={`3px solid ${theme.palette.primary.main}`}
              variant="h6"
              color="grey"
              sx={{ m: "0 0 10px 0" }}
              align="center"
            >
              Groups
            </Typography>

            <Box
              bgcolor={theme.palette.secondary.light}
              height="360px"
              sx={{
                p: 1,
                border: "2px solid #ccc",
                overflowX: "hidden",
                overflowY: "visible",
              }}
            >
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
            </Box>
            <Button
              onClick={handleOpen}
              variant="contained"
              fullWidth
              component={Link}
              to="#"
              sx={{ fontSize: "14px", my: 2, padding: "10px 12px" }}
            >
              <AddIcon sx={{ mr: "4px" }} />
              Add
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <NewGroupForm />
              </Box>
            </Modal>
          </Box>
        </Box>
      </Box>
      <Box
        gridColumn="2/3"
        sx={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
          p: 2,
        }}
      >
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <Box sx={{ gridColumn: "span 4" }}>
            <Typography
              borderBottom={`3px solid ${theme.palette.primary.main}`}
              variant="h6"
              color="grey"
              sx={{ m: "0 0 10px 0" }}
              align="center"
            >
              Users
            </Typography>
            <TextField
              fullWidth
              id="standard-search"
              label="Search"
              type="search"
              variant="standard"
              margin="dense"
            />
            <Box
              bgcolor={theme.palette.secondary.light}
              height="300px"
              sx={{
                p: 1,
                border: "2px solid #ccc",
                overflowX: "hidden",
                overflowY: "visible",
              }}
            >
              <ListItem
                sx={{ backgroundColor: "white", mb: 1 }}
                secondaryAction={
                  <Checkbox
                    edge="start"
                    inputProps={{ "aria-labelledby": "1" }}
                  />
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
              <ListItem
                sx={{ backgroundColor: "white", mb: 1 }}
                secondaryAction={
                  <Checkbox
                    edge="start"
                    inputProps={{ "aria-labelledby": "1" }}
                  />
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
              <ListItem
                sx={{ backgroundColor: "white", mb: 1 }}
                secondaryAction={
                  <Checkbox
                    edge="start"
                    inputProps={{ "aria-labelledby": "1" }}
                  />
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
              <ListItem
                sx={{ backgroundColor: "white", mb: 1 }}
                secondaryAction={
                  <Checkbox
                    edge="start"
                    inputProps={{ "aria-labelledby": "1" }}
                  />
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
              <ListItem
                sx={{ backgroundColor: "white", mb: 1 }}
                secondaryAction={
                  <Checkbox
                    edge="start"
                    inputProps={{ "aria-labelledby": "1" }}
                  />
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
              <ListItem
                sx={{ backgroundColor: "white", mb: 1 }}
                secondaryAction={
                  <Checkbox
                    edge="start"
                    inputProps={{ "aria-labelledby": "1" }}
                  />
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
              <ListItem
                sx={{ backgroundColor: "white", mb: 1 }}
                secondaryAction={
                  <Checkbox
                    edge="start"
                    inputProps={{ "aria-labelledby": "1" }}
                  />
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
              <ListItem
                sx={{ backgroundColor: "white", mb: 1 }}
                secondaryAction={
                  <Checkbox
                    edge="start"
                    inputProps={{ "aria-labelledby": "1" }}
                  />
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
              <ListItem
                sx={{ backgroundColor: "white", mb: 1 }}
                secondaryAction={
                  <Checkbox
                    edge="start"
                    inputProps={{ "aria-labelledby": "1" }}
                  />
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
              <ListItem
                sx={{ backgroundColor: "white", mb: 1 }}
                secondaryAction={
                  <Checkbox
                    edge="start"
                    inputProps={{ "aria-labelledby": "1" }}
                  />
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
            </Box>
            <Button
              variant="contained"
              fullWidth
              component={Link}
              to="/create-users"
              sx={{ fontSize: "14px", my: 2, padding: "10px 12px" }}
            >
              <AddIcon sx={{ mr: "4px" }} />
              Add
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        gridColumn="3/4"
        sx={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
          p: 2,
        }}
      >
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <Box sx={{ gridColumn: "span 4" }}>
            <Typography
              borderBottom={`3px solid ${theme.palette.primary.main}`}
              variant="h6"
              color="grey"
              sx={{ m: "0 0 10px 0" }}
              align="center"
            >
              Rights
            </Typography>

            <Box
              bgcolor={theme.palette.secondary.light}
              height="420px"
              sx={{
                p: 1,
                border: "2px solid #ccc",
                overflowX: "hidden",
                overflowY: "visible",
              }}
            >
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Dashboard
                  </Typography>
                  {/* <Typography sx={{ color: "text.secondary" }}>
                    I am an accordion
                  </Typography> */}
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
                      <ListItemText id={"labelId"} primary={`Graph`} />
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
                      <ListItemText id={"labelId"} primary={`Table`} />
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
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Products
                  </Typography>
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
                      <ListItemText id={"labelId"} primary={`Add`} />
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
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Users
                  </Typography>
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
                      <ListItemText id={"labelId"} primary={`Add`} />
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
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Roles
                  </Typography>
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
                      <ListItemText id={"labelId"} primary={`Add`} />
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
            </Box>
            {/* <Button
              variant="contained"
              fullWidth
              component={Link}
              to="#"
              sx={{ fontSize: "14px", my: 2, padding: "10px 12px" }}
            >
              <AddIcon sx={{ mr: "4px" }} />
              Add
            </Button> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
