import useUserStore from "@/store/UserStore";

import { Box, Flex, Link, Spacer, Text, useColorModeValue } from "@chakra-ui/react";

import { CompanyIcon } from "../icons/CompanyIcon";
import { LocationIcon } from "../icons/LocationIcon";
import { WebsiteIcon } from "../icons/WebsiteIcon";
import { TwitterIcon } from "../icons/TwitterIcon";

export const Socials = () => {
    const { user } = useUserStore();

    return (
        <Flex
            direction={["column", "column", "row"]}
            fontSize="0.938rem"
            color={useColorModeValue("pale-blue", "white")}
            w="90%"
            pt={["24px", "24px", "30px", "37px"]}
        >
            <Flex direction="column">
                {/* location */}
                <Flex opacity={user.location ? "100%" : "50%"}>
                    <LocationIcon alignSelf="center" />
                    <Text pl="16px">{user.location ? user.location : "Not Available"}</Text>
                </Flex>
                <Flex
                    pt={["16px", "16px", "19px"]}
                    opacity={user.blog ? "100%" : "50%"}
                    alignItems={["center", "center", "flex-start"]}
                >
                    <WebsiteIcon />
                    {user.blog ? (
                        <Link href={user.blog} pl="16px">
                            {user.blog.length < 25 ? user.blog : "Website"}
                        </Link>
                    ) : (
                        <Box pl="16px">Not Available</Box>
                    )}
                </Flex>
            </Flex>
            <Spacer />
            <Flex direction="column">
                <Flex
                    pt={["16px", "16px", 0, 0]}
                    opacity={user.twitter_username ? "100%" : "50%"}
                    alignItems={["center", "center", "flex-start"]}
                >
                    <TwitterIcon />
                    {user.twitter_username ? (
                        <Link pl="16px" href={`https://twitter.com/${user.twitter_username}`}>
                            {user.twitter_username}
                        </Link>
                    ) : (
                        <Box pl="16px">Not Available</Box>
                    )}
                </Flex>
                <Flex
                    pt={["16px", "16px", "19px"]}
                    opacity={user.company ? "100%" : "50%"}
                    alignItems={["center", "center", "none"]}
                >
                    <CompanyIcon />
                    <Text pl="16px">{user.company ? user.company : "Not Available"}</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
