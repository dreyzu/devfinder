import { Flex } from "@chakra-ui/react";

import { ImageDiv } from "./card-parts/cards-desktop/ImageDiv";
import { Description } from "./card-parts/Description";
import { Socials } from "./card-parts/Socials";
import { Stats } from "./card-parts/Stats";
import { Summary } from "./card-parts/Summary";

export const Card = () => {
    return (
        <Flex direction={["column", "column", "column", "row"]} w="100%" alignItems="flex-start">
            {/* ImageDiv is for desktop device only */}
            <ImageDiv />
            <Flex
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                w={["100%", "100%", "100%", "480px"]}
                ml={[0, 0, 0, "37px"]}
            >
                <Summary />
                <Description />
                <Stats />
                <Socials />
            </Flex>
        </Flex>
    );
};
