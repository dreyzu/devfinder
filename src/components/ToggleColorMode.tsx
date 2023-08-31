import { Button, useColorModeValue } from "@chakra-ui/react";

interface ToggleButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

export const ToggleButton = ({ children, onClick, ...props }: ToggleButtonProps) => {
    return (
        <Button
            m={0}
            p={0}
            bg="none"
            aria-label="toggle light/dark mode"
            alignSelf="center"
            variant="ghost"
            _hover={{ bg: "none", color: useColorModeValue("#222731", "#90A4D4") }}
            _active={{
                bg: "none",
                transform: "none",
                borderColor: "none",
            }}
            _focus={{
                boxShadow: "none",
            }}
            fontSize="0.81rem"
            onClick={onClick}
            {...props}
        >
            {children}
        </Button>
    );
};
