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
            mb="16px"
            w={["300px", "573px", "573px", "730px"]}
            h="60px"
            minHeight="60px"
            justifyContent="center"
            alignItems="center"
            borderRadius="15px"
            background={useColorModeValue("white", "blue-high")}
            id="searchbar"
        >
            <FormControl>
                <Flex>
                    <InputGroup w={["210px", "455px", "455px", "600px"]}>
                        <InputLeftElement pointerEvents="none" children={<SearchIcon ml={["16px", "32px"]} />} />
                        <Input
                            placeholder="Search GitHub username..."
                            variant="unstyled"
                            ml={["8px", "24px"]}
                            fontSize={["10px", "18px"]}
                            fontFamily="space mono"
                            _placeholder={{ color: useColorModeValue("pale-blue", "white") }}
                            type="search"
                        />
                    </InputGroup>
                    <Spacer display={["none", "none", "flex"]} />
                    <Button
                        w={["84px", "106px"]}
                        mr={[0, 0, "8px"]}
                        borderRadius="10px"
                        background="blue"
                        color="white"
                        type="submit"
                        id="button"
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
