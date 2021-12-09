import { Flex, Image } from "@chakra-ui/react";

//desktop only
// conversion to em or rem is done but still need to check on figma for real sizes
export const ImageDiv = () => {
    return (
        <Flex direction="column" display={["none", "none", "none", "flex"]} ml="4.8em" h="100%" w="11.7em">
            <Image borderRadius="full" boxSize={["7em", "11.7em"]} src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Flex>
    );
};
