import { Flex, Image } from "@chakra-ui/react";

//desktop only

export const ImageDiv = () => {
    return (
        <Flex direction="column" display={["none", "none", "none", "flex"]} ml="4.8em" h="100%" w="11.7em">
            <Image borderRadius="full" boxSize="11.7em" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Flex>
    );
};
