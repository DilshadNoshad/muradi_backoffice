import { Typography, Box } from "@mui/material";
import { theme } from "../../theme";


interface TitleProps {
    title: string;
    subtitle: string;
}
const Title: React.FC<TitleProps> = (props) => {

    return (
        <Box mb="20px">

            <Typography
                variant="h5"
                color="grey"
                fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
            >
                {props.title}
            </Typography>
            <Typography variant="h6" color={theme.palette.primary.main}>
                {props.subtitle}
            </Typography>
        </Box>
    );
};

export default Title;