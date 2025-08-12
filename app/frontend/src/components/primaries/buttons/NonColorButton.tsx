"use client";

import React from "react";
import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';


interface MainButtonProps extends ChakraButtonProps {
    label?: string,
    icon?: React.ReactNode,
}

export default function NonColorButton({ label, ...rest }: MainButtonProps) {
    const { theme } = useTheme();

    return (
        <Button
            bg={rest.bg || theme.colors.color2}
            color={rest.color || theme.colors.onColor2}
            _hover={{ bg: rest._hover?.bg || theme.colors.color3 }}
            _active={{ bg: rest._active?.bg || theme.colors.color4 }}
            _focus={{ boxShadow: "none" }}
            borderRadius={rest.borderRadius || "md"}
            fontSize={rest.fontSize || "16px"}
            {...rest} 
        >
            {label}
            {rest.icon ? rest.icon : <></>}
        </Button>
    );
};