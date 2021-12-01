import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { Header } from "./Header";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar";
import { SocialsComponent } from "./Socials";

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
            <Profile />
            <SocialsComponent />
        </Flex>
    );
};
