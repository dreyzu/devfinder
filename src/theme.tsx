import "@fontsource/space-mono";

import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
        initialColorMode:
            window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
        useSystemColorMode: false,
    },
    colors: {
        blue: "#0079FF",
        white: "#FEFEFE",
        "grey-blue": "#697C9A",
        "pale-blue": "#4B6A9B",
        "grey-black": "#2B3442",
        "grey-white": "#F6F8FF",
        "marine-blue": "220°, 57%, 18%",
        "blue-high": "#1E2A47",
    },
});
