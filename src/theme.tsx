import { colors, createTheme } from "@mui/material";

export const theme = createTheme({
    status: {
        danger: '#e53e3e',
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
            main: "color: rgb(97, 97, 97)",
            lightGrey: "color: rgb(158, 158, 158)",
        }
    }
})