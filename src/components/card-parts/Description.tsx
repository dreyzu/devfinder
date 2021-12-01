import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

export const Description = () => {
    return (
        <Flex mt={["33px", "24px", "24px", "20px"]} h="75px" w="100%" alignItems="center" fontSize={["12px", "15px"]}>
            <Text lineHeight="25px" color={useColorModeValue("pale-blue", "white")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque volutpat mattis eros.
            </Text>
        </Flex>
    );
};
