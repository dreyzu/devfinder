import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// conversion to em or rem is done but still need to check on figma for real sizes
export const Stats = () => {
    return (
        <Flex
            borderRadius="1em"
            background={useColorModeValue("grey-white", "marine-blue")}
            justifyContent={["space-between", "space-between", "initial"]}
            alignItems="center"
            mt="23px"
            px={["15px", "15px", 0]}
            h="85px"
            w="100%"
            fontSize={["1.1rem", "1.1rem", "1.3rem", "null"]}
        >
            <Flex direction="column" pl={["0px", "0px", "32px"]} alignItems={["center", "center", "flex-start"]}>
                <Text color={useColorModeValue("pale-blue", "white")}>Repos</Text>
                <Text
                    fontSize={["1.6rem", "1.6rem", "2.2rem"]}
                    fontWeight="bold"
                    color={useColorModeValue("grey-black", "white")}
                >
                    8
                </Text>
            </Flex>
            <Flex direction="column" pl={[0, 0, "99px"]} alignItems={["center", "center", "flex-start"]}>
                <Text color={useColorModeValue("pale-blue", "white")}>Followers</Text>
                <Text
                    fontSize={["1.6rem", "1.6rem", "2.2rem"]}
                    fontWeight="bold"
                    color={useColorModeValue("grey-black", "white")}
                >
                    3938
                </Text>
            </Flex>
            <Flex direction="column" pl={[0, 0, "82px"]} alignItems={["center", "center", "flex-start"]}>
                <Text color={useColorModeValue("pale-blue", "white")}>Following</Text>
                <Text
                    fontSize={["1.6rem", "1.6rem", "2.2rem"]}
                    fontWeight="bold"
                    color={useColorModeValue("grey-black", "white")}
                >
                    9
                </Text>
            </Flex>
        </Flex>
    );
};
