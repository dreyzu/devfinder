import useUserStore from "@/store/UserStore";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

export const Stats = () => {
    const { user } = useUserStore();

    return (
        <Flex
            borderRadius="1em"
            background={useColorModeValue("grey-white", "marine-blue")}
            justifyContent={["space-between", "space-between", "initial"]}
            alignItems="center"
            px={["15px", "15px", 0]}
            mt="10px"
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
                    {user.public_repos}
                </Text>
            </Flex>
            <Flex direction="column" pl={[0, 0, "99px"]} alignItems={["center", "center", "flex-start"]}>
                <Text color={useColorModeValue("pale-blue", "white")}>Followers</Text>
                <Text
                    fontSize={["1.6rem", "1.6rem", "2.2rem"]}
                    fontWeight="bold"
                    color={useColorModeValue("grey-black", "white")}
                >
                    {user.followers}
                </Text>
            </Flex>
            <Flex direction="column" pl={[0, 0, "82px"]} alignItems={["center", "center", "flex-start"]}>
                <Text color={useColorModeValue("pale-blue", "white")}>Following</Text>
                <Text
                    fontSize={["1.6rem", "1.6rem", "2.2rem"]}
                    fontWeight="bold"
                    color={useColorModeValue("grey-black", "white")}
                >
                    {user.following}
                </Text>
            </Flex>
        </Flex>
    );
};
