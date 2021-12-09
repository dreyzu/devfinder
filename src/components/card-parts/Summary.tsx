import "@fontsource/space-mono";

import { Flex, Heading, Image, Link, Spacer, Text, useColorModeValue } from "@chakra-ui/react";

// conversion to em or rem is done but still need to check on figma for real sizes
export const Summary = () => {
    return (
        <Flex
            w={["23em", "35em", "100%"]}
            h={["7em", "7em", "11.7em", "auto"]}
            fontFamily="space mono"
            fontSize={["1.3rem", "1.6rem"]}
            justifyContent="flex-start"
            alignItems={["center", "center", "center", "flex-start"]}
            id="summary"
        >
            {/* Image for mobile only, up to tablet devices */}
            <Image
                borderRadius="full"
                boxSize={["7em", "11.7em"]}
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                display={["flex", "flex", "flex", "none"]}
            />
            <Flex direction="column" ml={["2em", "2em", "2em", 0]}>
                <Heading
                    fontSize={["1.6em", "2.6em"]}
                    fontWeight="bold"
                    fontFamily="space mono"
                    color={useColorModeValue("grey-black", "white")}
                >
                    Name
                </Heading>
                <Text color="blue">@pseudo</Text>
                {/* mobile/tablet only */}
                <Flex display={["flex", "flex", "flex", "none"]}>
                    <Text color={useColorModeValue("grey-blue", "white")} fontSize={["1.1rem", "1.3rem"]}>
                        Joined Date
                    </Text>
                </Flex>
            </Flex>
            <Spacer display={["none", "none", "none", "flex"]} />
            {/* desktop only */}
            <Flex display={["none", "none", "none", "flex"]} mt="0.5em">
                <Text fontSize="1.5rem" color={useColorModeValue("grey-blue", "white")}>
                    Joined Date
                </Text>
            </Flex>
        </Flex>
    );
};
