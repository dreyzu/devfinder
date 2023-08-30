import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

import { HomePage } from "./components/Homepage";
import { theme } from "./theme";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <HomePage />
        </ChakraProvider>
    );
}

export default App;
