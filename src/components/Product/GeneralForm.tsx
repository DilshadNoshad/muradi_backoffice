import * as React from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import CameraIcon from "@mui/icons-material/CameraAlt";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import JoditReact from "jodit-react-ts";
import ImageUploading, { ImageListType } from "react-images-uploading";
import "jodit/build/jodit.min.css";
import { theme } from "../../theme";
import CategoryCheckbox from "../UI/CategoryCheckbox";
import { Link } from "react-router-dom";

export default function GeneralForm() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const [prodThumbnail, setProdThumbnail] = React.useState([]);
  const [prodImages, setProdImages] = React.useState([]);
  const [prodDesc, setProdDesc] = React.useState<string>();

  const maxNumber = 69;
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const onThumbChangeHandler = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setProdThumbnail(imageList as never[]);
  };

  const onImagesChangeHandler = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setProdImages(imageList as never[]);
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 300px"
      gridAutoRows="minmax(100px, auto)"
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
          <TextField
            fullWidth
            type="text"
            label="Title"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Short Description"
            sx={{ gridColumn: "span 4" }}
          />
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
        <Typography
          borderBottom={`3px solid ${theme.palette.primary.main}`}
          variant="h6"
          color="grey"
          sx={{ m: "0 0 10px 0" }}
        >
          Product Image
        </Typography>
        <ImageUploading value={prodThumbnail} onChange={onThumbChangeHandler}>
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            isDragging,
            dragProps,
          }) => (
            <Box
              {...dragProps}
              sx={{ backgroundColor: isDragging ? "pink" : "white" }}
            >
              {imageList.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    height: "280px",
                    boxShadow:
                      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                  }}
                >
                  <img
                    onClick={onImageUpload}
                    src={image.dataURL}
                    alt="pic"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </Box>
              ))}

              <Box textAlign="center">
                {imageList.length > 0 && (
                  <Typography
                    variant="subtitle1"
                    color="grey"
                    sx={{ fontStyle: "italic", m: "5px" }}
                  >
                    Click the image to edit or update
                  </Typography>
                )}
                <Box
                  height={imageList.length > 0 ? "auto" : "100px"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={onImageUpload}
                    variant="contained"
                    endIcon={<CameraIcon />}
                  >
                    Upload
                  </Button>
                  {imageList.length > 0 && (
                    <Button
                      onClick={onImageRemoveAll}
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Remove
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          )}
        </ImageUploading>
      </Box>
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
          <Box sx={{ gridColumn: "span 2" }}>
            <Typography
              borderBottom={`3px solid ${theme.palette.primary.main}`}
              variant="h6"
              color="grey"
              sx={{ m: "0 0 10px 0" }}
            >
              Product Categories
            </Typography>

            <Box
              bgcolor={theme.palette.secondary.light}
              height="240px"
              sx={{
                p: 2,
                border: "2px solid #ccc",
                overflowX: "hidden",
                overflowY: "visible",
              }}
            >
              <CategoryCheckbox />
              <CategoryCheckbox />
            </Box>
          </Box>
          <Box sx={{ gridColumn: "span 2" }}>
            <Typography
              borderBottom={`3px solid ${theme.palette.primary.main}`}
              variant="h6"
              color="grey"
              sx={{ m: "0 0 10px 0" }}
            >
              Add New Category
            </Typography>
            <Box
              // bgcolor={theme.palette.secondary.light}
              sx={{
                py: 2,

                // overflowX: "hidden",
                // overflowY: "visible",
              }}
            >
              <TextField
                sx={{ my: 2 }}
                fullWidth
                type="text"
                label="New Category Name"
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Parent Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Parent Category"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              variant="contained"
              fullWidth
              component={Link}
              to="#"
              sx={{ fontSize: "14px", my: 2, padding: "10px 12px" }}
            >
              <AddIcon sx={{ mr: "4px" }} />
              Add
            </Button>
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
        <Typography
          borderBottom={`3px solid ${theme.palette.primary.main}`}
          variant="h6"
          color="grey"
          sx={{ m: "0 0 10px 0" }}
        >
          Product Gallery
        </Typography>
        <ImageUploading
          multiple
          value={prodImages}
          onChange={onImagesChangeHandler}
          maxNumber={maxNumber}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <Box
              {...dragProps}
              sx={{ backgroundColor: isDragging ? "pink" : "white" }}
            >
              <Box
                display="grid"
                gridTemplateColumns="repeat(3, 1fr)"
                gridAutoRows="80px"
                gap="10px"
              >
                {imageList.map((image, index) => (
                  <Box
                    key={index}
                    gridColumn="span 1"
                    sx={{
                      position: "relative",
                      boxShadow:
                        "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                    }}
                  >
                    <img
                      onClick={() => onImageUpdate(index)}
                      src={image.dataURL}
                      alt="pic"
                      width="100%"
                      height="100%"
                      loading="lazy"
                    />
                    <Box
                      className="image-item__btn-wrapper"
                      sx={{ position: "absolute", top: 0, right: 0 }}
                    >
                      <button onClick={() => onImageRemove(index)}>x</button>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box textAlign="center">
                {imageList.length > 0 && (
                  <Typography
                    variant="subtitle1"
                    color="grey"
                    sx={{ fontStyle: "italic", m: "5px" }}
                  >
                    Click the image to edit or update
                  </Typography>
                )}
                <Box
                  height={imageList.length > 0 ? "auto" : "240px"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={onImageUpload}
                    variant="contained"
                    endIcon={<CameraIcon />}
                  >
                    Upload
                  </Button>
                  {imageList.length > 0 && (
                    <Button
                      onClick={onImageRemoveAll}
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Remove
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          )}
        </ImageUploading>
      </Box>
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
        <JoditReact onChange={(content) => setProdDesc(content)} />
        {prodDesc}
      </Box>
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
            Price (Rs)
          </Typography>
          <TextField
            fullWidth
            hiddenLabel
            id="outlined-number"
            type="number"
            sx={{ gridColumn: "2 / 4" }}
          />
          <Typography
            variant="subtitle1"
            color="grey"
            sx={{ gridColumn: "1 / 2", padding: "10px 0 10px 0", m: "5px" }}
          >
            Old Price (Rs)
          </Typography>
          <TextField
            fullWidth
            hiddenLabel
            id="outlined-number"
            type="number"
            sx={{ gridColumn: "2 / 4" }}
          />
          <Typography
            variant="subtitle1"
            color="grey"
            sx={{ gridColumn: "1 / 2", padding: "10px 0 10px 0", m: "5px" }}
          >
            Sale Price (Rs)
          </Typography>
          <TextField
            fullWidth
            hiddenLabel
            id="outlined-number"
            type="number"
            sx={{ gridColumn: "2 / 4" }}
          />
          <Typography
            variant="subtitle1"
            color="grey"
            sx={{ gridColumn: "1 / 2", padding: "10px 0 10px 0", m: "5px" }}
          >
            Regular Price Without Tax (Rs)
          </Typography>
          <TextField
            fullWidth
            hiddenLabel
            id="outlined-number"
            type="number"
            sx={{ gridColumn: "2 / 3" }}
          />
          <Typography
            variant="subtitle1"
            color="grey"
            sx={{ gridColumn: "3 / 4", padding: "10px 0 10px 0", m: "5px" }}
          >
            Regular Price With Tax (Rs)
          </Typography>
          <TextField
            fullWidth
            hiddenLabel
            id="outlined-number"
            type="number"
            sx={{ gridColumn: "4 / 5" }}
          />

          <Typography
            variant="subtitle1"
            color="grey"
            sx={{ gridColumn: "1 / 2", padding: "10px 0 10px 0", m: "5px" }}
          >
            Final Price Without Tax (Rs)
          </Typography>
          <TextField
            fullWidth
            hiddenLabel
            id="outlined-number"
            type="number"
            sx={{ gridColumn: "2 / 3" }}
          />
          <Typography
            variant="subtitle1"
            color="grey"
            sx={{ gridColumn: "3 / 4", padding: "10px 0 10px 0", m: "5px" }}
          >
            Final Price With Tax (Rs)
          </Typography>
          <TextField
            fullWidth
            hiddenLabel
            id="outlined-number"
            type="number"
            sx={{ gridColumn: "4 / 5" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
