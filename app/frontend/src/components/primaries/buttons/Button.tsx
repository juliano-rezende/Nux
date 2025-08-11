"use client";

import React from "react";
import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';
import { IoPerson } from "react-icons/io5";


interface MainButtonProps extends ChakraButtonProps {
    label?: string,
    icon?: React.ReactNode,
}

export default function ButtonMain({ label, ...rest }: MainButtonProps) {
    const { theme } = useTheme();

    return (
        <Button
            bg={rest.bg || theme.colors.color6}
            {...rest} 
        >
            {label}
            {rest.icon ? rest.icon : <></>}
        </Button>
    );
};