import useUserStore from "@/store/UserStore";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

export const Description = () => {
    const { user } = useUserStore();

    return (
        <Flex
            pt={["33px", "33px", "24px", "20px"]}
            w="100%"
            alignItems="center"
            fontSize={["0.813rem", "0.813rem", "0.938rem"]}
            opacity={user.bio ? "100%" : "50%"}
        >
            <Text color={useColorModeValue("pale-blue", "white")}>
                {user.bio ? user.bio : "This profile has no bio"}
            </Text>
        </Flex>
    );
};
