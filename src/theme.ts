import "@fontsource/space-mono";

import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

//need to change this
const breakpoints = createBreakpoints({
    sm: "32em",
    md: "76.8em",
    lg: "144em",
    xl: "256em",
});

export const theme = extendTheme({
    breakpoints: { breakpoints },
    config: {
        initialColorMode:
            window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
        useSystemColorMode: true,
    },
    colors: {
        blue: "#0079FF",
        white: "#FEFEFE",
        "grey-blue": "#697C9A",
        "pale-blue": "#4B6A9B",
        "grey-black": "#2B3442",
        "grey-white": "#F6F8FF",
        "marine-blue": "#141D2F",
        "blue-high": "#1E2A47",
    },
});
