
import React from 'react';
import { PaletteColor, PaletteColorOptions, ThemeOptions } from "@mui/material";

declare module '@mui/material/styles' {


    interface Theme {
        status: {
            danger: string;
        };
    }
    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color'];
        };
    }

    interface Palette {
        greyColors?: PaletteColor
    }

    interface PaletteOptions {
        greyColors?: PaletteColorOptions
    }

    interface SimplePaletteColorOptions {
        lightGrey?: string
    }
    interface PaletteColor {
        lightGrey?: string
    }
}

