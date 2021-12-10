import "@fontsource/space-mono";

import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
    sm: "375px",
    md: "768px",
    lg: "1440px",
    xl: "2650px",
    "2xl": "4000px",
});

export const theme = extendTheme({
    breakpoints,
    config: {
        initialColorMode: "system",
        useSystemColorMode: false,
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
