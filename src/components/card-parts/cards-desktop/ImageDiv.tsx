import useUserStore from "@/store/UserStore";
import { Flex, Image } from "@chakra-ui/react";

//desktop only

export const ImageDiv = () => {
    const { user } = useUserStore();

    return (
        <Flex direction="column" display={["none", "none", "none", "flex"]} ml="48px" h="100%" w="117px">
            <Image borderRadius="full" boxSize="117px" src={user.avatar_url} alt="GitHub's user profile picture" />
        </Flex>
    );
};
