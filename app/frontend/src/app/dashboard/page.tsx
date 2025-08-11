"use client";

import { Button, CloseButton, Drawer, Flex, Icon, IconButton, Input, NativeSelect, Popover, Portal, Switch, Text } from "@chakra-ui/react";
import { useTheme } from "@/context/ThemeContext";
import { useMediaQuery } from "@chakra-ui/react";
import React, { useState } from 'react';
import { FaCog, FaFileAlt, FaFolderOpen, FaHome, FaMoon, FaSun } from "react-icons/fa";
import { MdCoffeeMaker } from "react-icons/md";
import { HiCog, HiHeart } from "react-icons/hi";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import TextP from "@/components/primaries/texts/TextP";
import TextN from "@/components/primaries/texts/TextN";
import IconButtonType1 from "@/components/primaries/buttons/IconButtonType1";
import MenuList, { MenuItemData } from "@/components/walls/dashboard/MenuList";
import DynamicMenuList from "@/components/walls/dashboard/MenuList";
import { RiArrowRightLine } from "react-icons/ri";
import ActionButton from "@/components/primaries/buttons/ActionButton";
import { IoPerson } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import NonColorButton from "@/components/primaries/buttons/NonColorButton";



export default function DashboardPage() {

  //const { theme, toggleTheme } = useTheme();
  const [userName, setUserName] = useState<string>('John Doe');

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
      bg={theme.colors.color1}
      w={"100%"}
      h={"100%"}
      flexDirection="row">

        <Flex
          h="100%"
          display={{base: 'none', md: 'none', lg: 'flex'}}
          flexGrow={[1, 0.8, 0.5]}
          bg={theme.colors.color2}
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between">

          <Flex flexDirection="row" flexGrow={1} alignItems="center" gap="5px">
            <Icon w={["32px", "36px", "40px"]} h={["32px", "36px", "40px"]} color={theme.colors.color6}>
              <BiSolidCoffeeAlt/>
            </Icon>

            <Text
                fontFamily="'Inter Variable', sans-serif"
                fontWeight="900"
                fontSize={["32px", "36px", "40px"]}
                color={theme.colors.color7}
              > NUX</Text>
          </Flex>

          <Flex
            w="100%"
            flexGrow={10}
            justifyContent="center">

          </Flex>

          <Flex
            w="100%"
            flexGrow={1}
            pr="20px"
            pl="20px"
            pb="20px"
            alignItems="end"
            justifyContent="left">


          </Flex>
        </Flex>

        <Flex h="100%" w="2px" display={{base: 'none', md: 'none', lg: 'flex'}}  bg={theme.colors.color3}/>

        <Flex
          h="100%"
          flexGrow={[1, 3, 5]}
          bg={theme.colors.color1}
          flexDirection="column">

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
                          <Flex
                            h="100%"
                            w="100%"
                            bg={theme.colors.color2}
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="space-between"
                            pt="20px"
                            pb="20px">
                              <Icon w={["32px", "36px", "40px"]} h={["32px", "36px", "40px"]} color={theme.colors.color6}>
                                <BiSolidCoffeeAlt/>
                              </Icon>

                              <Text
                                  fontFamily="'Inter Variable', sans-serif"
                                  fontWeight="900"
                                  fontSize={["32px", "36px", "40px"]}
                                  color={theme.colors.color7}
                                > NUX</Text>
                            </Flex>
                        </Drawer.Body>
                        <Drawer.CloseTrigger asChild>
                          <CloseButton size="sm" bg={theme.colors.color3} color={theme.colors.onColor3}/>
                        </Drawer.CloseTrigger>
                      </Drawer.Content>
                    </Drawer.Positioner>
                  </Portal>
                </Drawer.Root>


              </Flex>

              <Text
                //fontFamily="'Inter Variable', sans-serif"
                //fontWeight="500"
                fontSize={"22px"}
                color={theme.colors.onColor1}
              > Olá, {userName}! </Text>

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


                            <ActionButton 
                              icon={<CiLogin />}
                              label={"Sair da Conta"}
                              mt={"8px"}/>

                              <NonColorButton 
                              icon={<CiLogin />}
                              label={"Sair da Conta"}
                              mt={"8px"}/>


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
            <Flex w="100%" h="2px" bg={theme.colors.color3}/>
        </Flex>
    </Flex>
  );
}
