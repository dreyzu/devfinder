import useUserStore from "@/store/UserStore";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

export const Description = () => {
    const { user } = useUserStore();

    return (
        <Flex
            mt={["33px", "33px", "24px", "20px"]}
            h="75px"
            w="100%"
            alignItems="center"
            fontSize={["1.2rem", "1.3rem", "1.5rem"]}
            opacity={user.bio ? "100%" : "50%"}
        >
            <Text lineHeight="25px" color={useColorModeValue("pale-blue", "white")}>
                {user.bio ? user.bio : "This profile has no bio"}
            </Text>
        </Flex>
    );
};
