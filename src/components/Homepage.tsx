import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { Header } from "./Header";
import { SearchBar } from "./SearchBar";

export const HomePage = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            background={useColorModeValue("grey-white", "marine-blue")}
            h="100vh"
            w="100%"
        >
            <Header />
            <SearchBar />
        </Flex>
    );
};
