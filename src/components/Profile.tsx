import { Flex, useColorModeValue } from "@chakra-ui/react";

import { Card } from "./Card";

export const Profile = () => {
    return (
        <Flex
            w={["300px", "327px", "573px", "730px"]}
            borderRadius="15px"
            background={useColorModeValue("white", "blue-high")}
            id="profile"
            py="48px"
            px={["24px", "24px", "40px", "48px"]}
            mt={["16px", "16px", "24px"]}
            role="main"
        >
            <Card />
        </Flex>
    );
};
