import "@fontsource/space-mono";

import { Flex, Image } from "@chakra-ui/react";

import { ImageDiv } from "./card-parts/cards-desktop/ImageDiv";
import { Description } from "./card-parts/Description";
import { Socials } from "./card-parts/Socials";
import { Stats } from "./card-parts/Stats";
import { Summary } from "./card-parts/Summary";

// conversion to em or rem is done but still need to check on figma for real sizes
export const Card = () => {
    return (
        <Flex
            direction={["column", "column", "column", "row"]}
            w="100%"
            fontFamily="space mono"
            alignItems="flex-start"
            pl={["2em", "2em", "4em", 0]}
            pr={["2em", "2em", "4em", 0]}
        >
            {/* ImageDiv is for desktop device only */}
            <ImageDiv />
            <Flex
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                w={["100%", "100%", "100%", "48em"]}
                ml={[0, 0, 0, "3.7em"]}
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
