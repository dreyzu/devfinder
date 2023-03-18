import { Flex, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

import { defaultData } from "@/data/defaultData";

import { DataContext } from "./DataContext";
import { Header } from "./Header";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar";

export const HomePage = () => {
    const [data, setData] = useState(defaultData);

    return (
        <DataContext.Provider value={{ data, setData }}>
            <Flex
                direction="column"
                alignItems="center"
                bg={useColorModeValue("grey-white", "marine-blue")}
                w="100%"
                minHeight="100%"
            >
                <Header />
                <SearchBar />
                <Profile />
            </Flex>
        </DataContext.Provider>
    );
};
