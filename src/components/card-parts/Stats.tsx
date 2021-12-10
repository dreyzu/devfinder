import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// conversion to em or rem is done but still need to check on figma for real sizes
export const Stats = () => {
    return (
        <Flex
            borderRadius="1em"
            background={useColorModeValue("grey-white", "marine-blue")}
            justifyContent="space-around"
            alignItems="center"
            mt="23px"
            h="85px"
            w="100%"
            px="15px"
            fontSize={["1.1rem", "1.1rem", "1.3rem", "null"]}
        >
            <Flex direction="column" alignItems={["center", "flex-start", "Flex-start"]}>
                <Text color={useColorModeValue("pale-blue", "white")}>Repos</Text>
                <Text
                    fontSize={["1.2rem", "2.2rem"]}
                    fontWeight="bold"
                    color={useColorModeValue("grey-black", "white")}
                >
                    8
                </Text>
            </Flex>
            <Flex direction="column" alignItems={["center", "flex-start", "Flex-start"]}>
                <Text color={useColorModeValue("pale-blue", "white")}>Followers</Text>
                <Text
                    fontSize={["1.2rem", "2.2rem"]}
                    fontWeight="bold"
                    color={useColorModeValue("grey-black", "white")}
                >
                    3938
                </Text>
            </Flex>
            <Flex direction="column" alignItems={["center", "flex-start", "Flex-start"]}>
                <Text color={useColorModeValue("pale-blue", "white")}>Following</Text>
                <Text
                    fontSize={["1.2rem", "2.2rem"]}
                    fontWeight="bold"
                    color={useColorModeValue("grey-black", "white")}
                >
                    9
                </Text>
            </Flex>
        </Flex>
    );
};
