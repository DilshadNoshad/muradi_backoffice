import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "../../theme";
import ImageUploading, { ImageListType } from "react-images-uploading";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CameraIcon from "@mui/icons-material/CameraAlt";

const UserForm: React.FC = () => {
  const [userImage, setUserImage] = React.useState([]);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values: any) => {
    values["profileImg"] = userImage;
    console.log(values);
  };
  const onUserImgChangeHandler = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setUserImage(imageList as never[]);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(6, minmax(0, 1fr))"
            gridTemplateRows={"repeat(6, minmax(50px, 1fr))"}
            sx={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
              p: 2,
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              fullWidth
              //   variant="filled"
              type="text"
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={!!touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "1/3", gridRow: "1/2" }}
            />

            <TextField
              fullWidth
              //   variant="filled"
              type="text"
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={!!touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
              sx={{ gridColumn: "3/5", gridRow: "1/2" }}
            />
            <Box
              gridColumn="5/7"
              gridRow="1/5"
              // sx={{
              //   backgroundColor: "white",
              //   borderRadius: "12px",
              //   boxShadow:
              //     "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
              //   p: 2,
              // }}
            >
              <Typography
                borderBottom={`3px solid ${theme.palette.primary.main}`}
                variant="h6"
                color="grey"
                sx={{ m: "0 0 10px 0" }}
              >
                Profile Image
              </Typography>
              <ImageUploading
                value={userImage}
                onChange={onUserImgChangeHandler}
              >
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
                      <Avatar
                        key={index}
                        onClick={onImageUpload}
                        alt="Remy Sharp"
                        src={image.dataURL}
                        sx={{ margin: "0 auto", width: 240, height: 240 }}
                      />
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
                        height={imageList.length > 0 ? "auto" : "350px"}
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
            <TextField
              fullWidth
              //   variant="filled"
              type="text"
              label="Middle Name"
              sx={{ gridColumn: "1/3", gridRow: "2/3" }}
            />
            <TextField
              fullWidth
              //   variant="filled"
              type="text"
              label="Username"
              sx={{ gridColumn: "3/5", gridRow: "2/3" }}
            />
            <TextField
              fullWidth
              //   variant="filled"
              type="text"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "1/5", gridRow: "3/4" }}
            />
            <TextField
              fullWidth
              //   variant="filled"
              type="text"
              label="Vendor Name"
              sx={{ gridColumn: "1/3", gridRow: "4/5" }}
            />
            <TextField
              fullWidth
              //   variant="filled"
              type="text"
              label="Vendor Email"
              sx={{ gridColumn: "3/5", gridRow: "4/5" }}
            />
            <TextField
              fullWidth
              //   variant="filled"
              type="text"
              label="Contact Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contact}
              name="contact"
              error={!!touched.contact && !!errors.contact}
              helperText={touched.contact && errors.contact}
              sx={{ gridColumn: "span 3" }}
            />
            <TextField
              fullWidth
              //   variant="filled"
              type="text"
              label="Address 1"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address1}
              name="address1"
              error={!!touched.address1 && !!errors.address1}
              helperText={touched.address1 && errors.address1}
              sx={{ gridColumn: "span 3" }}
            />
            <TextField
              fullWidth
              //   variant="filled"
              type="text"
              label="Address 2"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address2}
              name="address2"
              error={!!touched.address2 && !!errors.address2}
              helperText={touched.address2 && errors.address2}
              sx={{ gridColumn: "span 6" }}
            />
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Create New User
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default UserForm;
