import { Flex, Image } from "@chakra-ui/react";

//desktop only
export const ImageDiv = () => {
    return (
        <Flex direction="column" display={["none", "none", "none", "flex"]} ml="48px" h="100%" w="117px">
            <Image borderRadius="full" boxSize={["70px", "117px"]} src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Flex>
    );
};
