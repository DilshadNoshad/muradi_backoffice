import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, FormControl, InputBase, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import VerticalTabs from '../tabs/VerticalTabs';
import JoditReact from "jodit-react-ts";
import ImageUploading, { ImageListType } from "react-images-uploading";
import 'jodit/build/jodit.min.css';
import { theme } from '../../theme';

export default function NewProduct() {

    const [value, setValue] = React.useState<string>();

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
    };
    const BootstrapInput = styled(InputBase)(({ theme }) => ({

        'label + &': {
            marginTop: theme.spacing(3),
        },

        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
            border: '1px solid #ced4da',
            fontSize: 16,
            width: '100%',
            padding: '10px 12px',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
            '&:focus': {
                boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
                borderColor: theme.palette.primary.main,
            },
        },
    }));



    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: '#fff',
    //     padding: theme.spacing(1),
    // }));
    return (

        <Box
            display="grid"
            gridTemplateColumns="1fr 300px"
            gridAutoRows="minmax(200px, auto)"
            gap="20px"
        >
            <Box
                gridColumn="1/2"
                sx={{ backgroundColor: "white", p: 2 }}
            >
                <FormControl variant="standard" fullWidth>
                    <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: "1.5rem" }}>
                        Title
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" />
                </FormControl>


            </Box>
            <Box
                gridColumn="2/3"
                sx={{ backgroundColor: "white", p: 2 }}
            >
                <ImageUploading
                    // multiple
                    value={images}
                    onChange={onChange}
                // maxNumber={maxNumber}
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps
                    }) => (
                        <Box sx={{ height: "auto", backgroundColor: "white" }}>
                            <Typography
                                borderBottom={`3px solid ${theme.palette.primary.main}`}
                                variant="h6"
                                color="grey"
                                sx={{ m: "0 0 10px 0" }}
                            >
                                Product Image
                            </Typography>

                            <Box onClick={onImageUpload}
                                {...dragProps} sx={{ height: "280px", boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)", backgroundColor: isDragging ? "red" : "white" }}>
                                {imageList.map((image, index) => (
                                    <img key={index}

                                        src={image.dataURL}
                                        alt="pic"
                                        width="100%"
                                        height="100%"
                                        loading="lazy"
                                    />
                                ))}
                            </Box>

                            <Box textAlign='center'>
                                <Typography

                                    variant="subtitle1"
                                    color="grey"
                                    sx={{ fontStyle: "italic", m: "5px" }}
                                >
                                    Click the image to edit or update
                                </Typography>

                                {/* <Button 
                                        onClick={onImageUpload}
                                    >
                                        Upload
                                    </Button> */}
                                <Button onClick={onImageRemoveAll} color="error" startIcon={<DeleteIcon />}>
                                    Remove Product Image
                                </Button>
                            </Box>

                        </Box>
                    )}
                </ImageUploading>


            </Box>
            <Box
                gridColumn="1/3"
                sx={{ backgroundColor: "white", p: 2 }}
            >
                <JoditReact onChange={(content) => setValue(content)} />
                {value}


            </Box>
            <Box
                gridColumn="1/2"
                sx={{ backgroundColor: "white", p: 2 }}
            >
                <VerticalTabs />


            </Box>
            <Box
                gridColumn="2/3"
                sx={{ backgroundColor: "white", p: 2 }}
            >
                <Box >
                    <Typography
                        borderBottom={`3px solid ${theme.palette.primary.main}`}
                        variant="h6"
                        color="grey"
                        sx={{ m: "0 0 10px 0" }}
                    >
                        Product Gallery
                    </Typography>

                    <Box sx={{ height: "280px", backgroundColor: "white" }}>
                        <Box
                            display="grid"
                            gridTemplateColumns="repeat(3, 1fr)"
                            gridAutoRows="100px"
                            gap="10px"
                        >
                            <Box
                                gridColumn="span 1"
                                sx={{ boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)" }}
                            > <img
                                    src="https://woocommerce.com/wp-content/uploads/2013/05/product-image-galleries-settings-e1519338144700.png"
                                    alt="pic"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                />
                            </Box>
                            <Box
                                gridColumn="span 1"
                                sx={{ boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)" }}
                            > <img
                                    src="https://woocommerce.com/wp-content/uploads/2013/05/product-image-galleries-settings-e1519338144700.png"
                                    alt="pic"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                />
                            </Box>
                            <Box
                                gridColumn="span 1"
                                sx={{ boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)" }}
                            > <img
                                    src="https://woocommerce.com/wp-content/uploads/2013/05/product-image-galleries-settings-e1519338144700.png"
                                    alt="pic"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                />
                            </Box>
                            <Box
                                gridColumn="span 1"
                                sx={{ boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)" }}
                            > <img
                                    src="https://woocommerce.com/wp-content/uploads/2013/05/product-image-galleries-settings-e1519338144700.png"
                                    alt="pic"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                />
                            </Box>
                        </Box>


                    </Box>

                    <Box textAlign='center'>
                        <Typography

                            variant="subtitle1"
                            color="grey"
                            sx={{ fontStyle: "italic", m: "5px" }}
                        >
                            Click the image to edit or update
                        </Typography>

                        {/* <Button 
                                        onClick={onImageUpload}
                                    >
                                        Upload
                                    </Button> */}
                        <Button color="error" startIcon={<DeleteIcon />}>
                            Remove Product Image
                        </Button>
                    </Box>

                </Box>


            </Box>
        </Box>


    );
}
