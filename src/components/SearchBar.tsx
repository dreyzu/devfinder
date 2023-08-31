import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
} from "@chakra-ui/react";

import { ChangeEvent, useState } from "react";
import useUserStore from "@/store/UserStore";
import { SearchIcon } from "./icons/SearchIcon";

export const SearchBar = () => {
    const { searchQuery } = useUserStore();

    const [searchInput, setSearchInput] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false); // Reset the error when input changes
        setSearchInput(event.target.value); // Update the searchInput state
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await searchQuery(searchInput);
        } catch (error: unknown) {
            setError(true);
        }
    };

    return (
        <form>
            <Flex
                mt={["16px", "16px", "24px", "24px"]}
                w={["300px", "327px", "573px", "730px"]}
                px={["7px", "7px", "10px"]}
                alignItems="center"
                minHeight="60px"
                borderRadius="15px"
                background={useColorModeValue("white", "blue-high")}
                id="searchbar"
            >
                <FormControl isInvalid={error}>
                    <InputGroup h="100%" w="100%" role="searchbox">
                        <InputLeftElement w="20px" h="100%" pl="16px" pointerEvents="none" children={<SearchIcon />} />
                        <Input
                            fontSize={["0.688rem", "0.688rem", "1.125rem"]}
                            mr="5px"
                            placeholder="Search GitHub username..."
                            id="username"
                            autoComplete="false"
                            type="search"
                            variant="unstyled"
                            _placeholder={{ color: useColorModeValue("pale-blue", "white") }}
                            onChange={handleChange}
                        />
                        {error && (
                            <FormErrorMessage
                                margin={0}
                                fontSize={["0.688rem", "0.688rem"]}
                                w={["150px", "150px", "100px"]}
                                pr="5px"
                                alignSelf="center"
                            >
                                No results
                            </FormErrorMessage>
                        )}
                        <Button
                            py="13px"
                            px="24px"
                            minHeight="46px"
                            w={["84px", "84px", "106px"]}
                            borderRadius="10px"
                            background="blue"
                            color="white"
                            type="submit"
                            id="button"
                            fontSize={["0.875rem", "0.875rem", "1rem"]}
                            fontFamily="space mono"
                            _hover={{ bg: "#60ABFF" }}
                            onClick={handleSubmit}
                        >
                            Search
                        </Button>
                    </InputGroup>
                </FormControl>
            </Flex>
        </form>
    );
};
