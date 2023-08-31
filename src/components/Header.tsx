import { Box, Flex, Spacer, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ToggleButton } from "./ToggleColorMode";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex
            w={["300px", "327px", "573px", "730px"]}
            alignItems="flex-start"
            justifyContent="center"
            fontWeight="bold"
            color={useColorModeValue("pale-blue", "white")}
            id="header"
            role="banner"
        >
            <Text fontWeight="bold" fontSize={["1.625rem"]} color={useColorModeValue("#222731", "white")} as="h1">
                devfinder
            </Text>
            <Spacer />
            <Box alignSelf="center">
                <ToggleButton onClick={toggleColorMode}>
                    {colorMode === "light" ? "DARK" : "LIGHT"}
                    {colorMode === "light" ? <MoonIcon ml="1rem" /> : <SunIcon ml="1rem" />}
                </ToggleButton>
            </Box>
        </Flex>
    );
};
