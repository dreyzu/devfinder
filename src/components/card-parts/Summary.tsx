import "@fontsource/space-mono";

import { Flex, Heading, Image, Spacer, Text, useColorModeValue } from "@chakra-ui/react";

export const Summary = () => {
    return (
        <Flex
            w={["287px", "287px", "350px", "480px"]}
            h={["70px", "70px", "117px", "auto"]}
            fontFamily="space mono"
            fontSize={["1.1rem", "1.3rem", "1.6rem"]}
            justifyContent="flex-start"
            alignItems={["center", "center", "center", "flex-start"]}
            id="summary"
        >
            {/* Image for mobile only, up to tablet devices */}
            <Image
                borderRadius="full"
                boxSize={["70px", "70px", "117px"]}
                src="../../../assets/octocat-profilepic.png"
                alt="default profile picture"
                display={["flex", "flex", "flex", "none"]}
            />

            <Flex direction="column" ml={["20px", "20px", "20px", 0]}>
                <Heading
                    fontSize={["1.6rem", "1.6rem", "2.6rem"]}
                    fontWeight="bold"
                    fontFamily="space mono"
                    color={useColorModeValue("grey-black", "white")}
                >
                    The Octocat
                </Heading>
                <Text color="blue" fontSize={["1.1rem", "1.3rem", "1.6rem"]}>
                    @octocat
                </Text>
                {/* mobile/tablet only */}
                <Flex display={["flex", "flex", "flex", "none"]}>
                    <Text color={useColorModeValue("grey-blue", "white")} fontSize={["1.1rem", "1.3rem"]}>
                        Joined 25 Jan 2011
                    </Text>
                </Flex>
            </Flex>
            <Spacer display={["none", "none", "none", "flex"]} />
            {/* desktop only */}
            <Flex display={["none", "none", "none", "flex"]} mt="5px">
                <Text fontSize="1.6rem" color={useColorModeValue("grey-blue", "white")}>
                    Joined Date
                </Text>
            </Flex>
        </Flex>
    );
};
