import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const NewCategoryForm: React.FC = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [parentCategory, setParentCategory] = React.useState("");

  const parentCatHandleChange = (event: SelectChangeEvent) => {
    setParentCategory(event.target.value as string);
  };

  return (
    <form>
      <Box
        display="grid"
        gridTemplateColumns="1fr 300px"
        gridAutoRows="minmax(100px, auto)"
        gap="16px"
      >
        <Box
          gridColumn="1/3"
          sx={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow:
              "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            p: 2,
          }}
        >
          {" "}
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <Typography
              variant="subtitle1"
              color="grey"
              sx={{ gridColumn: "1 / 2", padding: "10px 0 10px 0", m: "5px" }}
            >
              Name
            </Typography>
            <TextField
              fullWidth
              hiddenLabel
              id="outlined-number"
              type="text"
              sx={{ gridColumn: "2 / 4" }}
            />
            <Typography
              variant="subtitle1"
              color="grey"
              sx={{ gridColumn: "1 / 2", padding: "10px 0 10px 0", m: "5px" }}
            >
              Description
            </Typography>
            <TextField
              fullWidth
              hiddenLabel
              id="outlined-number"
              type="text"
              sx={{ gridColumn: "2 / 4" }}
            />
            <Typography
              variant="subtitle1"
              color="grey"
              sx={{ gridColumn: "1 / 2", padding: "10px 0 10px 0", m: "5px" }}
            >
              Parent Category
            </Typography>
            <FormControl sx={{ gridColumn: "2 / 4" }} fullWidth>
              <Select
                displayEmpty
                id="category-select"
                value={parentCategory}
                onChange={parentCatHandleChange}
              >
                <MenuItem disabled value="">
                  <em>--- Select Parent Category ---</em>
                </MenuItem>
                <MenuItem value={"cat1"}>Category One</MenuItem>
                <MenuItem value={"cat2"}>Category Two</MenuItem>
                <MenuItem value={"cat3"}>Category Three</MenuItem>
                <MenuItem value={"cat4"}>Category Four</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="end" mt="20px">
        <Button color="secondary" variant="contained">
          Create New Category
        </Button>
      </Box>
    </form>
  );
};

export default NewCategoryForm;
