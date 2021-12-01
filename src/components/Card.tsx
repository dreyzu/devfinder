import "@fontsource/space-mono";

import { Box, Flex, Heading, Image, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { useRemoteData } from "react-hook-remotedata";

export const Card = () => {
    const { data, loading, error } = useRemoteData();
    if (error) return <Box children="error" />;
    return (
        <Flex direction="row" w="100%" h="100%" fontFamily="space mono" justifyContent="flex-start">
            <Flex direction="row" w="230px" h="70px" mt="32px" fontFamily="space mono" ml="24px">
                <Image borderRadius="full" boxSize="70px" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                <Flex direction="column" ml="20px" justifyContent="center">
                    <Heading
                        fontSize="16px"
                        fontWeight="bold"
                        fontFamily="space mono"
                        color={useColorModeValue("grey-black", "white")}
                    >
                        Name
                    </Heading>
                    <Link color="blue" fontSize="13px">
                        @pseudo
                    </Link>
                    <Text fontSize="13px" color={useColorModeValue("grey-blue", "white")}>
                        Joined Date
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
