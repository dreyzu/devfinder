import "@fontsource/space-mono";

import { Flex, Heading, Image, Link, Spacer, Text, useColorModeValue } from "@chakra-ui/react";

export const Summary = () => {
    return (
        <Flex
            w={["230px", "350px", "350px", "100%"]}
            h={["70px", "117px", "117px", "auto"]}
            mt={["32px", "40px", "40px", "48px"]}
            fontFamily="space mono"
            fontSize={["13px", "16px"]}
            justifyContent="flex-start"
            alignItems={["center", "center", "center", "flex-start"]}
        >
            {/* Image for mobile only, up to tablet devices */}
            <Image
                borderRadius="full"
                boxSize={["70px", "117px"]}
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                display={["flex", "flex", "flex", "none"]}
            />
            <Flex direction="column" ml={["20px", "20px", "20px", 0]}>
                <Heading
                    fontSize={["16px", "26px"]}
                    fontWeight="bold"
                    fontFamily="space mono"
                    color={useColorModeValue("grey-black", "white")}
                >
                    Name
                </Heading>
                <Text color="blue">@pseudo</Text>
                {/* mobile/tablet only */}
                <Flex display={["flex", "flex", "flex", "none"]}>
                    <Text color={useColorModeValue("grey-blue", "white")}>Joined Date</Text>
                </Flex>
            </Flex>
            <Spacer display={["none", "none", "none", "flex"]} />
            {/* desktop only */}
            <Flex display={["none", "none", "none", "flex"]} mt="5px">
                <Text fontSize={["13px", "16px", "16px", "15px"]} color={useColorModeValue("grey-blue", "white")}>
                    Joined Date
                </Text>
            </Flex>
        </Flex>
    );
};
