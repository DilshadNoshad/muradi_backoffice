import { createTheme } from "@mui/material";

export const theme = createTheme({
    status: {
        danger: '#e53e3e',
        success: "rgb(0, 200, 83)"
    },
    palette: {
        primary: {
            main: "#5E35B1",
            light: "rgb(237, 231, 246)"
        },
        secondary: {
            main: "#2196F3",
            light: "#E3F2FD",
            dark: "#1565C0",
        },
        greyColors: {
            main: "#ccc",
            lightGrey: "#e4e4e4",

        }
    }
})