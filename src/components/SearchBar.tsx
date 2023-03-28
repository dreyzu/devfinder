import "@fontsource/space-mono";

import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Spacer,
    useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useState } from "react";

import { DataContext } from "./DataContext";
import * as api from "./usersApi";

export const SearchBar = () => {
    // search input
    const [search, setSearch] = useState("");
    const { setData } = useContext(DataContext);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setSearch(e.target.value);
        setError(null);
    };

    return (
        <form>
            <Flex
                mt={["36px", "36px", "44px", "36px"]}
                w={["300px", "327px", "573px", "730px"]}
                minHeight="60px"
                justifyContent="center"
                alignItems="center"
                borderRadius="15px"
                background={useColorModeValue("white", "blue-high")}
                id="searchbar"
            >
                <FormControl isInvalid={error}>
                    <Flex alignItems="center">
                        <InputGroup id="input" ml="16px" h="25px" w={["205px", "222px", "455px", "585px"]}>
                            <InputLeftElement pointerEvents="none" children={<SearchIcon w="20px" h="20px" />} />
                            <Input
                                ml={["8px", "8.95px", "15px"]}
                                placeholder="Search GitHub username..."
                                id="username"
                                type="search"
                                variant="unstyled"
                                fontFamily="space mono"
                                fontSize={["10px", "11px", "18px"]}
                                _placeholder={{ color: useColorModeValue("pale-blue", "white") }}
                                onChange={handleChange}
                            />
                            {!error ? null : (
                                <FormErrorMessage
                                    fontFamily="space mono"
                                    fontSize={["1rem", "1rem", "1.2rem"]}
                                    w={["150px", "150px", "100px"]}
                                    p={["5px", "5px", 0, 0]}
                                >
                                    No results
                                </FormErrorMessage>
                            )}
                        </InputGroup>
                        <Spacer display={["none", "none", "flex"]} />
                        <Button
                            p={0}
                            w={["70px", "80px", "84px", "106px"]}
                            mr={["7px", "7px", "10px", "10px"]}
                            minHeight="40px"
                            borderRadius="10px"
                            background="blue"
                            color="white"
                            type="submit"
                            id="button"
                            fontSize="1.4rem"
                            fontFamily="space mono"
                            _hover={{ bg: "#60ABFF" }}
                            onClick={(e) => {
                                e.preventDefault();
                                api.getUser(search).then(setData).catch(setError);
                            }}
                        >
                            Search
                        </Button>
                    </Flex>
                </FormControl>
            </Flex>
        </form>
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
