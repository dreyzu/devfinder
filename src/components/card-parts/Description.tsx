import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// conversion to em or rem is done but still need to check on figma for real sizes
export const Description = () => {
    return (
        <Flex
            mt={["3.3em", "2.4em", "2.4em", "2em"]}
            h="7.5em"
            w="100%"
            alignItems="center"
            fontSize={["1.2em", "1.5em"]}
        >
            <Text lineHeight="2.5em" color={useColorModeValue("pale-blue", "white")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque volutpat mattis eros.
            </Text>
        </Flex>
    );
};
