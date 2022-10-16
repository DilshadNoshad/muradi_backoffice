import { Box, Typography, useTheme } from "@mui/material";
import { theme } from "../../theme";


interface BoxEle {
    title: String,
    subtitle: String,
    icon: any,
    children: React.ReactNode
    increase: String
}
// { title, subtitle, icon, progress, increase }
const StatBox: React.FC<BoxEle> = (props) => {

    return (
        <Box width="100%" m="0">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {props.icon}
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ color: "grey" }}
                    >
                        {props.title}
                    </Typography>
                </Box>
                <Box>
                    {props.children}
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="2px">
                <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>
                    {props.subtitle}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ color: theme.palette.secondary.main }}
                >
                    {props.increase}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatBox;