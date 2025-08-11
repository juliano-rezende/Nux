"use client";

import React from "react";
import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';
import { IoPerson } from "react-icons/io5";


interface MainButtonProps extends ChakraButtonProps {
    label?: string,
    icon?: React.ReactNode,
}

export default function ActionButton({ label, ...rest }: MainButtonProps) {
    const { theme } = useTheme();

    return (
        <Button
            bg={rest.bg || theme.colors.color6}
            color={rest.color || theme.colors.onColor6}
            _hover={{ bg: rest.bg || theme.colors.color7 }}
            _active={{ bg: rest.bg || theme.colors.color8 }}
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