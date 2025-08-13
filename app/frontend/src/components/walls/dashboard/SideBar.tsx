"use client";

import React from "react";
import { Button, ButtonProps as ChakraButtonProps, Flex, Text, Image, Icon, FlexProps } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';
import DynamicMenuList, { DynamicMenuListProps } from "./MenuList";
import { BiSolidCoffeeAlt } from "react-icons/bi";



export interface SideBarProps extends FlexProps {
  companyLogo: string;
  menuButtons: DynamicMenuListProps[];
}



export default function SideBar({ companyLogo, menuButtons, ...rest }: SideBarProps) {
    const { theme } = useTheme();

    return (
        <Flex
          h="100%"
          display={ rest.display || 'flex'}
          flexGrow={[1]}
          bg={theme.colors.color2}
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between">


          <Flex flexDirection="row" flexGrow={3} alignItems="center" gap="5px">
            <Image
              src={companyLogo}
              alt="Logo"
              w={["32px", "36px", "100px"]}
              h={["32px", "36px", "100px"]}/>
          </Flex>

          <Flex h="2px" w="100%" display={{base: 'none', md: 'none', lg: 'flex'}}  bg={theme.colors.color3}/>

          <Flex
            w="100%"
            flexGrow={10}
            flexDirection="column"
            alignItems="left"
            justifyContent="top"
            pt="30px">
            {
              menuButtons.map(item => (
                <DynamicMenuList
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  items={item.items}
                  href={item.href}
                />
              ))
            }
          </Flex>



          <Flex flexDirection="row" w="100%" flexGrow={3} justifyContent="center" alignItems="center" gap="5px">
            <Icon w={["24px", "26px", "28px"]} h={["24px", "26px", "28px"]} color={theme.colors.color6} >
              <BiSolidCoffeeAlt/>
            </Icon>

            <Text
                fontFamily="'Inter Variable', sans-serif"
                fontWeight="900"
                fontSize={["24px", "26px", "28px"]}
                color={theme.colors.color7}
              > NUX</Text>
          </Flex>
        </Flex>
    );
};