import useUserStore from "@/store/UserStore";

import { Flex, Text, HStack, useColorModeValue } from "@chakra-ui/react";

export const Stats = () => {
    const { user } = useUserStore();

    return (
        <HStack
            borderRadius="1em"
            background={useColorModeValue("grey-white", "marine-blue")}
            justifyContent={["space-between", "space-between", "initial"]}
            alignItems="center"
            px={["15px", "15px", "32px"]}
            mt={["23px", "23px", "32px"]}
            h="85px"
            spacing={[0, 0, "90px"]}
            w="100%"
            fontSize={["1rem", "1rem", "1.375rem"]}
        >
            <Flex direction="column">
                <Text color={useColorModeValue("pale-blue", "white")} fontSize={["0.688rem", "0.688rem", "0.813rem"]}>
                    Repos
                </Text>
                <Text
                    fontWeight="bold"
                    alignSelf={["center", "center", "flex-start"]}
                    color={useColorModeValue("grey-black", "white")}
                >
                    {user.public_repos}
                </Text>
            </Flex>
            <Flex direction="column">
                <Text color={useColorModeValue("pale-blue", "white")} fontSize={["0.688rem", "0.688rem", "0.813rem"]}>
                    Followers
                </Text>
                <Text
                    fontWeight="bold"
                    alignSelf={["center", "center", "flex-start"]}
                    color={useColorModeValue("grey-black", "white")}
                >
                    {user.followers}
                </Text>
            </Flex>
            <Flex direction="column">
                <Text color={useColorModeValue("pale-blue", "white")} fontSize={["0.688rem", "0.688rem", "0.813rem"]}>
                    Following
                </Text>
                <Text
                    fontWeight="bold"
                    alignSelf={["center", "center", "flex-start"]}
                    color={useColorModeValue("grey-black", "white")}
                >
                    {user.following}
                </Text>
            </Flex>
        </HStack>
    );
};
