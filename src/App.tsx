import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { HomePage } from "./components/Homepage";
import { theme } from "./theme";

const queryClient = new QueryClient();

function App({ children, ...props }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <HomePage />
            </ChakraProvider>
        </QueryClientProvider>
    );
}
console.log(theme.breakpoints);
console.log(`we'll see again tomorrow.`);
export default App;
