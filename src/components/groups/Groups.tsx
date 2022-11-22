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

import { theme } from "../../theme";
import { Link } from "react-router-dom";
import NewGroupForm from "../forms/NewGroupForm";

import GroupsList from "./GroupsList";
import UsersList from "./UsersList";
import RightsList from "./RightsList";

const Groups: React.FC = () => {
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
              Select Group
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
              <GroupsList />
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
              Select Users
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
              {/*----users map here-----*/}
              <UsersList />
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
              Select Rights
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
              <RightsList />
            </Box>
            <Button
              variant="contained"
              fullWidth
              component={Link}
              to="#"
              sx={{ fontSize: "14px", my: 2, padding: "10px 12px" }}
            >
              {/* <AddIcon sx={{ mr: "4px" }} /> */}
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Groups;
