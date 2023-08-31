import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

import { HomePage } from "./components/Homepage";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <HomePage />
        </ChakraProvider>
    );
}

export default App;
