import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";

import { DataContext } from "../DataContext";

export const Description = () => {
    const { data, setData } = useContext(DataContext);
    return (
        <Flex
            mt={["33px", "33px", "24px", "20px"]}
            h="75px"
            w="100%"
            alignItems="center"
            fontSize={["1.2rem", "1.3rem", "1.5rem"]}
            opacity={data?.bio ? "100%" : "50%"}
        >
            <Text lineHeight="25px" color={useColorModeValue("pale-blue", "white")}>
                {data?.bio ? data.bio : "This profile has no bio"}
            </Text>
        </Flex>
    );
};
