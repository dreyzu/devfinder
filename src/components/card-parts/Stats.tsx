import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

export const Stats = () => {
    return (
        <Flex
            borderRadius="10px"
            background={useColorModeValue("grey-white", "marine-blue")}
            justifyContent="space-around"
            alignItems="center"
            mt="23px"
            h="85px"
            w="100%"
            px="15px"
            fontSize={["11px", "13px"]}
        >
            <Flex direction="column" alignItems={["center", "flex-start", "Flex-start"]}>
                <Text color={useColorModeValue("pale-blue", "white")}>Repos</Text>
                <Text fontSize={["12px", "22px"]} fontWeight="bold" color={useColorModeValue("grey-black", "white")}>
                    8
                </Text>
            </Flex>
            <Flex direction="column" alignItems={["center", "flex-start", "Flex-start"]}>
                <Text color={useColorModeValue("pale-blue", "white")}>Followers</Text>
                <Text fontSize={["12px", "22px"]} fontWeight="bold" color={useColorModeValue("grey-black", "white")}>
                    3938
                </Text>
            </Flex>
            <Flex direction="column" alignItems={["center", "flex-start", "Flex-start"]}>
                <Text color={useColorModeValue("pale-blue", "white")}>Following</Text>
                <Text fontSize={["12px", "22px"]} fontWeight="bold" color={useColorModeValue("grey-black", "white")}>
                    9
                </Text>
            </Flex>
        </Flex>
    );
};
