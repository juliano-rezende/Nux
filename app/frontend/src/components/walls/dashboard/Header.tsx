"use client";

import React, { ReactElement } from "react";
import { Button, ButtonProps as ChakraButtonProps, Flex, Text, Image, Icon, CloseButton, Drawer, IconButton, Input, NativeSelect, Popover, Portal, Switch } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';
import DynamicMenuList, { DynamicMenuListProps } from "./MenuList";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import IconButtonType1 from "@/components/primaries/buttons/IconButtonType1";
import NonColorButton from "@/components/primaries/buttons/NonColorButton";
import TextP from "@/components/primaries/texts/TextP";
import { CiLogin } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import SideBar from "./SideBar";



export interface SideBar {
  companyLogo: string;
  userName: string;
  pageName: string;
  pageNameIcon: ReactElement;
  menuButtons: DynamicMenuListProps[];
}



export default function Header({ companyLogo, userName, pageNameIcon, pageName, menuButtons }: SideBar) {

    const {
        theme,
        currentThemeName,
        toggleTheme,
        paletteName,
        setPaletteName,
        availablePaletteNames
    } = useTheme();


    return (
        <Flex
              h="65px"
              w="100%"
              bg={theme.colors.color1}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">

              <Flex
                h="100%"
                pl="20px"
                bg={theme.colors.color0}
                justifyContent="center"
                alignItems="center">

                <Flex display={{base: 'none', md: 'none', lg: 'flex'}} flexDirection="row" alignItems="center" gap="10px">
                    <Icon size="lg" color={theme.colors.onColor8}>
                      {pageNameIcon}
                    </Icon>
                    <Text
                      textStyle="2xl"
                      fontWeight="semibold"
                      color={theme.colors.onColor8}
                      > {pageName}</Text>
                </Flex>


                <Drawer.Root placement={"start"}>
                  <Drawer.Trigger asChild>
                    <IconButton display={{base: 'flex', md: 'flex', lg: 'none'}} size="sm" bg={theme.colors.color3} color={theme.colors.onColor3} aria-label="Abrir ">
                      <RxHamburgerMenu/> 
                    </IconButton>
                  </Drawer.Trigger>
                  <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                      <Drawer.Content>
                        <Drawer.Body p="0px">
                          <SideBar companyLogo={companyLogo} menuButtons={menuButtons}/>
                        </Drawer.Body>
                        <Drawer.CloseTrigger asChild>
                          <CloseButton size="sm" bg={theme.colors.color3} color={theme.colors.onColor3}/>
                        </Drawer.CloseTrigger>
                      </Drawer.Content>
                    </Drawer.Positioner>
                  </Portal>
                </Drawer.Root>
              </Flex>

            {/*
            <Text
                //fontFamily="'Inter Variable', sans-serif"
                //fontWeight="500"
                //fontSize={"22px"}
                textStyle="2xl"
                fontWeight="medium"
                fontStyle={"italic"}
                color={theme.colors.onColor1}
                > Olá, {userName}! </Text>

            */}
              
              <Flex
                h="100%"
                bg={theme.colors.color0}
                justifyContent="center"
                alignItems="center"
                pr="20px">
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <IconButtonType1 aria-label="Naruto Form">
                        <Text fontSize="sm" color={theme.colors.color0}></Text>
                      </IconButtonType1>
                    </Popover.Trigger>
                    <Portal >
                      <Popover.Positioner>

                        <Popover.Content borderRadius="16px" css={{ "--popover-bg": theme.colors.color4 }}>
                          <Popover.Arrow />
                          <Popover.Body>

                            <Popover.Title
                              fontFamily="'Inter Variable', sans-serif"
                              color={theme.colors.onColor4}
                              fontSize="20px"
                              textAlign="center"
                              fontWeight="600">
                              Fazer Login
                            </Popover.Title>


                            <TextP color={theme.colors.onColor4} mt={6}>Nome de usuário:</TextP>
                            <Input
                              mt={2}
                              size="sm"
                              fontSize="16px"
                              w="100%"
                              borderRadius="6px"
                              color={theme.colors.onColor4}
                              bg={theme.colors.color4}
                              borderColor={theme.colors.color1}
                              placeholder="Digite seu nome de usuário"
                              _placeholder={{
                                color: theme.colors.color5,
                                opacity: 1
                              }}
                              focusVisibleRing="outside"
                              focusRingColor={theme.colors.color6}
                              focusRingWidth="0px"
                              focusRingStyle="none"
                            />



                            <TextP color={theme.colors.onColor4} mt={6} fontSize="16px">Senha:</TextP>
                            <Input
                              mt={2}
                              size="sm"
                              fontSize="16px"
                              w="100%"
                              borderRadius="6px"
                              color={theme.colors.onColor4}
                              bg={theme.colors.color4}
                              borderColor={theme.colors.color1}
                              placeholder="Digite sua senha"
                              _placeholder={{
                                color: theme.colors.color5,
                                opacity: 1
                              }}
                              focusVisibleRing="outside"
                              focusRingColor={theme.colors.color6}
                              focusRingWidth="0px"
                              focusRingStyle="none" />


                              <TextP color={theme.colors.onColor4} mt={6} fontSize="16px">Selecione o tema Atual</TextP>
                              <NativeSelect.Root size="md" mt="8px">
                                <NativeSelect.Field
                                  onChange={(e) => setPaletteName(e.target.value)}
                                  value={paletteName}
                                  fontSize="16px"
                                  borderRadius="6px"
                                  color={theme.colors.onColor4}
                                  bg={theme.colors.color4}
                                  borderColor={theme.colors.color1}>
                                  {
                                    availablePaletteNames.map((palette) => (
                                      <option style={{
                                          color: theme.colors.onColor4,
                                          backgroundColor: theme.colors.color4
                                        }}
                                        key={palette} value={palette}>{palette.toUpperCase().slice(0, 1) + palette.slice(1)}
                                      </option>
                                    ))
                                  }
                                </NativeSelect.Field>
                                <NativeSelect.Indicator />
                              </NativeSelect.Root>


                            {
                            /*<ActionButton 
                                icon={<CiLogin />}
                                label={"Sair da Conta"}
                                mt={"8px"}/> */
                            }
                            


                            <NonColorButton 
                              bg={theme.colors.color3}
                              icon={<CiLogin />}
                              label={"Sair da Conta"}
                              w="100%"
                              mt="20px"
                              color={"#FF0000"}
                              _hover={{ bg: theme.colors.color2}}/>


                            <TextP color={theme.colors.onColor4} mt={6} fontSize="16px">Selecione o tema:</TextP>
                            <Switch.Root onCheckedChange={toggleTheme} mt="10px">
                              <Switch.HiddenInput />
                              <Switch.Control bg={theme.colors.color6}/>
                              <Switch.Label color={theme.colors.color5}>Usar tema escuro</Switch.Label>
                            </Switch.Root>

                          </Popover.Body>
                        </Popover.Content>
                      </Popover.Positioner>
                    </Portal>
                  </Popover.Root>

              </Flex>
            </Flex>
    );
};