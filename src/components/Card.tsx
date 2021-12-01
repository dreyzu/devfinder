import { Box, Flex, Heading, Skeleton } from "@chakra-ui/react";
import { useRemoteData } from "react-hook-remotedata";

export const Card = () => {
    const { data, loading, error } = useRemoteData();
    if (error) return <Box children="error" />;
    return (
        <Box>
            <Skeleton isLoaded={!loading}>
                <Heading>Salut ca va ?</Heading>
            </Skeleton>
        </Box>
    );
};
