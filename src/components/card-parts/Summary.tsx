import { Box, Flex, Heading, Image, Link, Spacer, Text, useColorModeValue } from "@chakra-ui/react";

import useUserStore from "@/store/UserStore";

export const Summary = () => {
    const { user } = useUserStore();

    const date = new Date(user.created_at).toLocaleDateString("en-gb", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <Flex
            w={["287px", "287px", "350px", "480px"]}
            h={["70px", "70px", "117px", "auto"]}
            fontSize="1rem"
            justifyContent="flex-start"
            alignItems={["center", "center", "center", "flex-start"]}
            id="summary"
        >
            {/* Image for mobile only, up to tablet devices */}
            <Image
                borderRadius="full"
                boxSize={["70px", "70px", "117px"]}
                src={user.avatar_url}
                alt="GitHub's user profile picture"
                display={["flex", "flex", "flex", "none"]}
            />

            <Flex direction="column" ml={["20px", "20px", "20px", 0]}>
                <Heading
                    fontSize={["1rem", "1rem", "1.625rem"]}
                    fontWeight="bold"
                    color={useColorModeValue("grey-black", "white")}
                >
                    {user.name ? user.name : "no name"}
                </Heading>
                <Box color="blue" fontSize={["0.813rem", "0.813rem", "1rem"]}>
                    {user.login ? (
                        <Link href={`https://github.com/${user.login}`} isExternal>
                            {"@" + user.login}
                        </Link>
                    ) : (
                        <Box>no name</Box>
                    )}
                </Box>
                {/* mobile/tablet only */}
                <Flex display={["flex", "flex", "flex", "none"]} fontSize={["0.813rem", "0.813rem", "0.938rem"]}>
                    <Text color={useColorModeValue("grey-blue", "white")}>{"Joined " + date}</Text>
                </Flex>
            </Flex>
            <Spacer display={["none", "none", "none", "flex"]} />
            {/* desktop only */}
            <Flex display={["none", "none", "none", "flex"]} mt="5px" fontSize="0.938rem">
                <Text color={useColorModeValue("grey-blue", "white")}>{"Joined " + date}</Text>
            </Flex>
        </Flex>
    );
};
