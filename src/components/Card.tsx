import "@fontsource/space-mono";

import { Flex, Image } from "@chakra-ui/react";

import { Description } from "./card-parts/Description";
import { Socials } from "./card-parts/Socials";
import { Stats } from "./card-parts/Stats";
import { Summary } from "./card-parts/Summary";

export const Card = () => {
    return (
        <Flex
            direction={["column", "column", "column", "row"]}
            w="100%"
            h="100%"
            fontFamily="space mono"
            alignItems="flex-start"
            pl={["20px", "40px", "40px", 0]}
            pr={["20px", "40px", "40px", 0]}
        >
            <Flex direction="column" mt="48px" display={["none", "none", "none", "flex"]} ml="48px" h="100%" w="117px">
                <Image
                    borderRadius="full"
                    boxSize={["70px", "117px"]}
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                />
            </Flex>
            <Flex
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                w={["100%", "100%", "100%", "480px"]}
                ml={[0, 0, 0, "37px"]}
            >
                {/* profile icon + name + username + joined date div */}
                <Summary />
                {/* description div  */}
                <Description />
                {/* stats div  */}
                <Stats />
                {/* Socials links */}
                <Socials />
            </Flex>
        </Flex>
    );
};
