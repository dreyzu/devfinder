import "@fontsource/space-mono";

import { Flex, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { Card } from "./Card";

// conversion to em or rem is done but still need to check on figma for real sizes
export const Profile = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <Flex
            w={["30em", "32.7em", "57.3em", "73em"]}
            borderRadius="1.5em"
            alignItems="flex-start"
            background={useColorModeValue("white", "blue-high")}
            id="profile"
            py="4.8em"
            mb="5empx"
            mt="1.6em"
        >
            <Card />
        </Flex>
    );
};
