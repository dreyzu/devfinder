import "@fontsource/space-mono";

import {
    Button,
    Flex,
    FormControl,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Spacer,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";

export const SearchBar = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <Flex
            mb="1.6rem"
            w={["30rem", "57.3rem", "57.3rem", "73rem"]}
            minHeight="6rem"
            justifyContent="center"
            alignItems="center"
            borderRadius="1.5rem"
            background={useColorModeValue("white", "blue-high")}
            id="searchbar"
        >
            <FormControl>
                <Flex alignItems="center">
                    <InputGroup id="input">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<SearchIcon ml={["1.6rem", "3.2rem"]} w="2rem" minHeight="2rem" />}
                        />
                        <Input
                            placeholder="Search GitHub username..."
                            variant="unstyled"
                            ml={["1rem", "0.8rem", "2.4rem"]}
                            fontSize="1.8rem"
                            fontFamily="space mono"
                            _placeholder={{ color: useColorModeValue("pale-blue", "white") }}
                            type="search"
                        />
                    </InputGroup>
                    <Spacer display={["none", "none", "flex"]} />
                    <Button
                        w={["8.4rem", "10.6rem"]}
                        mr="0.8rem"
                        minHeight="4rem"
                        borderRadius="1rem"
                        background="blue"
                        color="white"
                        type="submit"
                        id="button"
                        fontSize="1.4rem"
                    >
                        Search
                    </Button>
                </Flex>
            </FormControl>
        </Flex>
    );
};

// Search Icon svg
const SearchIcon = ({ ...props }) => {
    return (
        <Icon {...props}>
            <path
                d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
                fill="#0079ff"
            />
        </Icon>
    );
};
