"use client";

import { Button, CloseButton, Drawer, Flex, Stat } from "@chakra-ui/react";
import { useTheme } from "@/context/ThemeContext";
import React, { useState } from 'react';
import DynamicMenuList, { DynamicMenuListProps } from "@/components/walls/dashboard/MenuList";
import { LuArchive, LuBook, LuBookOpen, LuBox, LuChefHat, LuFileSpreadsheet, LuFileText, LuFolder, LuGithub, LuLayoutDashboard, LuLayoutGrid, LuLogOut, LuMenu, LuMonitor, LuSave, LuSettings, LuShield, LuSquareStack, LuTable, LuTruck, LuUser, LuUsers } from "react-icons/lu";
import SideBar from "@/components/walls/dashboard/SideBar";
import Header from "@/components/walls/dashboard/Header";
import { TiHomeOutline } from "react-icons/ti";
import { MdAttachMoney } from "react-icons/md";
import { IoMdRestaurant } from "react-icons/io";





const sidebarMenuData: DynamicMenuListProps[] = [
  {
    label: "Dashboard",
    icon: <LuLayoutGrid />,
    href: "/dashboard",
    items: [],
  },
  {
    label: "Catálogo Digital",
    icon: <LuBookOpen />,
    href: "/catalogo",
    items: [],
  },
  {
    label: "Caixa",
    icon: <LuMonitor />,
    href: "/caixa",
    items: [],
  },
  {
    label: "Controle de Comandas",
    icon: <LuFileSpreadsheet />,
    href: "/comandas",
    items: [],
  },
  {
    label: "Gestão de Mesas",
    icon: <LuTable />,
    href: "/mesas",
    items: [],
  },
  {
    label: "Tela da Cozinha",
    icon: <LuChefHat />,
    href: "/cozinha",
    items: [],
  },
  {
    label: "Estoque",
    icon: <LuBox />,
    items: [
      {
        value: "produtos",
        label: "Produtos",
        icon: <LuArchive />,
        href: "/estoque/produtos",
      },
      {
        value: "relatorios_estoque",
        label: "Relatórios",
        icon: <LuArchive />,
        href: "/estoque/relatorios",
      },
    ],
  },
  {
    label: "Delivery",
    icon: <LuTruck />,
    href: "/delivery",
    items: [],
  },
  {
    label: "Configurações",
    icon: <LuSettings />,
    items: [
      {
        value: "perfil_loja",
        label: "Perfil da Loja",
        href: "/configuracoes/loja",
      },
      {
        value: "usuarios",
        label: "Usuários e Permissões",
        icon: <LuUsers />,
        href: "/configuracoes/usuarios",
      },
      {
        value: "seguranca",
        label: "Segurança",
        icon: <LuShield />,
        href: "/configuracoes/seguranca",
      },
    ],
  },
];




export default function DashboardPage() {

  const [userName, setUserName] = useState<string>('John Doe');
  const [todayInvoicing, setTodayInvoicing] = useState<string>("192.40".replace('.', ','));
  const [totaInvoicing, setTotaInvoicing] = useState<string>("4853.93".replace('.', ','));


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

      <SideBar display={{ base: 'none', md: 'none', lg: 'flex' }} companyLogo="/logo.jpg" menuButtons={sidebarMenuData} />

      <Flex h="100%" w="2px" display={{ base: 'none', md: 'none', lg: 'flex' }} bg={theme.colors.color3} />

      <Flex
        h="100%"
        flexGrow={[4, 8, 20]}
        bg={theme.colors.color1}
        flexDirection="column">

        <Header pageNameIcon={<LuLayoutGrid />} pageName={"Dashboard"} userName="João" companyLogo="/logo.jpg" menuButtons={sidebarMenuData} />
        <Flex w="100%" h="2px" bg={theme.colors.color3} />


        {/* Conteúdo principal da página */}
        <Flex w="100%" h="100%" p="20px" bg={theme.colors.color0}>

          <Flex p="20px" h="130px" flexDirection="row" gap="25px" >
            <Flex p="20px" bg={theme.colors.color2} borderRadius="12px" alignItems={"center"} >
              <MdAttachMoney size="50px"/>
              <Stat.Root>
                <Stat.Label>Faturamento Hoje</Stat.Label>
                <Stat.ValueText>R${todayInvoicing}</Stat.ValueText>
              </Stat.Root>
            </Flex>

            <Flex p="20px" bg={theme.colors.color2} borderRadius="12px" alignItems={"center"} >
              <MdAttachMoney size="50px"/>
              <Stat.Root>
                <Stat.Label>Faturamento Total</Stat.Label>
                <Stat.ValueText>R${totaInvoicing}</Stat.ValueText>
              </Stat.Root>
            </Flex>

            <Flex p="20px" bg={theme.colors.color2} borderRadius="12px" alignItems={"center"} >
              <IoMdRestaurant size="50px"/>
              <Stat.Root>
                <Stat.Label>Faturamento Total</Stat.Label>
                <Stat.ValueText>R${totaInvoicing}</Stat.ValueText>
              </Stat.Root>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
