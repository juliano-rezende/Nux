"use client";

import React, { ReactElement } from "react";
import { Button, ButtonProps as ChakraButtonProps, Flex, Text, Image, CloseButton, Drawer, Icon, IconButton, Input, NativeSelect, Popover, Portal, Switch, Box, Circle, Float, Avatar, Badge, InputGroup } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';
import DynamicMenuList, { DynamicMenuListProps } from "./MenuList";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import IconButtonType1 from "@/components/primaries/buttons/IconButtonType1";
import NonColorButton from "@/components/primaries/buttons/NonColorButton";
import TextP from "@/components/primaries/texts/TextP";
import { CiLogin } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import SideBar from "./SideBar";
import { IoIosNotifications, IoMdNotifications } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { LuSearch, LuUser } from "react-icons/lu";



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

  const [notifications, setNotifications] = React.useState<number>(3);


  return (
    <Flex
      h="93px"
      w="100%"
      bg={theme.colors.color1}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">

      <Flex
        h="100%"
        pl="20px"
        flexGrow={1}
        bg={theme.colors.color0}
        justifyContent="start"
        alignItems="center">

        <Flex display={{ base: 'none', md: 'none', lg: 'flex' }} flexDirection="row" alignItems="center" gap="10px">
          <Icon w="28px" h="28px" color={theme.colors.onColor2}>
            {pageNameIcon}
          </Icon>
          <Text
            fontSize={"28px"}
            fontWeight="semibold"
            color={theme.colors.onColor2}
          > {pageName}</Text>
        </Flex>
        


        <Drawer.Root placement={"start"}>
          <Drawer.Trigger asChild>
            <IconButton display={{ base: 'flex', md: 'flex', lg: 'none' }} size="sm" bg={theme.colors.color3} color={theme.colors.onColor3} aria-label="Abrir ">
              <RxHamburgerMenu />
            </IconButton>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Body p="0px">
                  <SideBar companyLogo={companyLogo} menuButtons={menuButtons} />
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" bg={theme.colors.color3} color={theme.colors.onColor3} />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Flex>


      <Flex
        h="100%"
        bg={theme.colors.color0}
        flexGrow={1}
        justifyContent="right"
        alignItems="center"
        flexDirection={"row"}
        pr="20px">

        <InputGroup w="300px" mr="28px" startElement={<LuSearch />}>
          <Input
            borderColor={theme.colors.color4}
            _focusVisible={{
              boxShadow: "0 0 0 1px " + theme.colors.color4,
              borderColor: theme.colors.color4,
            }}
            placeholder="Pesquisar"
            color={theme.colors.onColor2} />
        </InputGroup>


        <Box display="inline-block" pos="relative" mr="8px" >
          <IconButtonType1 icon={<IoIosNotifications />} aria-label="Notificações" />

          <Float placement={"top-start"}>
            <Circle size="5" bg="red" color="white">
              {notifications}
            </Circle>
          </Float>
        </Box>

        <Popover.Root>
          <Popover.Trigger asChild >
            <IconButtonType1 icon={<IoPerson />} aria-label="Perfil" />
          </Popover.Trigger>
          <Portal >
            <Popover.Positioner>
              <Popover.Content borderRadius="12px" css={{ '--popover-bg': theme.colors.color2}}>
                <Popover.Arrow />
                <Popover.Body>

                  <Popover.Title
                    color={theme.colors.onColor4}
                    fontSize="22px"
                    textAlign="center"
                    fontWeight="600">
                    Olá, {userName}!
                  </Popover.Title>

                  <NonColorButton
                    bg={theme.colors.color3}
                    icon={<CiLogin />}
                    label={"Sair da Conta"}
                    w="100%"
                    mt="100px"
                    color={"#FF0000"}
                    _hover={{ bg: theme.colors.color2 }} />

                  <TextP color={theme.colors.onColor4} mt={6} fontSize="16px">Selecione o tema:</TextP>
                  <Switch.Root onCheckedChange={toggleTheme} mt="10px">
                    <Switch.HiddenInput />
                    <Switch.Control bg={theme.colors.color6} />
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