import "@fontsource/space-mono";

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
                src={user.avatar_url}
                fallbackSrc="../../../assets/octocat-profilepic.png"
                alt="GitHub's user profile picture"
                display={["flex", "flex", "flex", "none"]}
            />

            <Flex direction="column" ml={["20px", "20px", "20px", 0]}>
                <Heading
                    fontSize={["1.6rem", "1.6rem", "2.6rem"]}
                    fontWeight="bold"
                    fontFamily="space mono"
                    color={useColorModeValue("grey-black", "white")}
                >
                    {user.name ? user.name : "no name"}
                </Heading>
                <Box color="blue" fontSize={["1.1rem", "1.3rem", "1.6rem"]}>
                    {user.login ? (
                        <Link href={`https://github.com/${user.login}`} isExternal>
                            {"@" + user.login}
                        </Link>
                    ) : (
                        <Box>no name</Box>
                    )}
                </Box>
                {/* mobile/tablet only */}
                <Flex display={["flex", "flex", "flex", "none"]}>
                    <Text color={useColorModeValue("grey-blue", "white")} fontSize={["1.1rem", "1.3rem"]}>
                        {"Joined " + date}
                    </Text>
                </Flex>
            </Flex>
            <Spacer display={["none", "none", "none", "flex"]} />
            {/* desktop only */}
            <Flex display={["none", "none", "none", "flex"]} mt="5px">
                <Text fontSize="1.6rem" color={useColorModeValue("grey-blue", "white")}>
                    {"Joined " + date}
                </Text>
            </Flex>
        </Flex>
    );
};
