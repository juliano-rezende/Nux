"use client";

import React, { ReactElement, cloneElement } from "react";
import { Flex, FlexProps } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';
import { IoPerson } from "react-icons/io5";

export interface IconButtonType1Props extends FlexProps {
    icon?: ReactElement;
}

export default function IconButtonType1({ icon, ...rest }: IconButtonType1Props) {
    const { theme } = useTheme();

    const defaultIcon = <IoPerson />;

    const iconToRender = icon || defaultIcon;

    const sizedIcon = cloneElement(iconToRender, { size: "22px" });

    return (
        <Flex
            bg={rest.bg || theme.colors.color0}
            color={rest.color || theme.colors.onColor3}
            borderRadius="100%"
            width="36px"
            height="36px"
            border="1px solid"
            borderColor="transparent"
            outline="none"
            justify="center"
            align="center"
            cursor="pointer"
            transition="background-color 0.2s, color 0.2s, border-color 0.2s"
            _hover={{
                bg: theme.colors.color2,
                color: theme.colors.onColor2,
                borderColor: theme.colors.color3,
            }}
            _focus={{
                boxShadow: "outline",
            }}
            {...rest}
        >
            {sizedIcon}
        </Flex>
    )
}