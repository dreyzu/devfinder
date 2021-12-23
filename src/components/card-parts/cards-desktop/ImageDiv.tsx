import { Flex, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { useQuery } from "react-query";

import { DataContext } from "@/components/DataContext";

//desktop only

export const ImageDiv = () => {
    const { data, setData } = useContext(DataContext);
    return (
        <Flex direction="column" display={["none", "none", "none", "flex"]} ml="48px" h="100%" w="117px">
            <Image
                borderRadius="full"
                boxSize="117px"
                src={data?.avatar_url}
                fallbackSrc="../../../assets/octocat-profilepic.png"
                alt="GitHub's user profile picture"
            />
        </Flex>
    );
};
