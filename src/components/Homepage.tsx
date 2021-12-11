import { Flex, useColorModeValue } from "@chakra-ui/react";

import { Header } from "./Header";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar";

export const HomePage = () => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            bg={useColorModeValue("grey-white", "marine-blue")}
            w="100%"
            h="100%"
        >
            <Header />
            <SearchBar />
            <Profile />
        </Flex>
    );
};
