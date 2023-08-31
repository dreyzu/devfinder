import useUserStore from "@/store/UserStore";
import { Flex, Image } from "@chakra-ui/react";

//desktop only

export const ImageDiv = () => {
    const { user } = useUserStore();

    return (
        <Flex display={["none", "none", "none", "flex"]}>
            <Image borderRadius="full" boxSize="117px" src={user.avatar_url} alt="GitHub's user profile picture" />
        </Flex>
    );
};
