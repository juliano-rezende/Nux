"use client";

import React, { ReactElement } from 'react';
import { Menu, Button, MenuItem, Portal } from '@chakra-ui/react';
import { LuChevronRight } from 'react-icons/lu';
import { useTheme } from '@/context/ThemeContext';
import { useRouter } from 'next/navigation'; // Importa o useRouter do Next.js

// Define a interface para os itens do menu
interface MenuItemProps {
  value: string;
  label: string;
  icon?: ReactElement;
  children?: MenuItemProps[];
  href?: string; // Adiciona a propriedade href para links
}

// Props do componente principal
export interface DynamicMenuListProps {
  label: string;
  icon?: ReactElement;
  items: MenuItemProps[];
  href?: string; // Propriedade href adicionada também aqui
}

// Função recursiva para renderizar os itens do menu e submenus
const RenderMenuItems = (items: MenuItemProps[]) => {
  const router = useRouter(); // Hook do router para navegação
  const { theme } = useTheme();

  return items.map((item) => {

    if (item.children && item.children.length > 0) {
      return (
        <Menu.Root key={item.value} positioning={{ placement: "right-start", gutter: 2 }}>
          <Menu.TriggerItem
            bg={theme.colors.onColor2}
            color={theme.colors.color2}
            _hover={{
              bg: theme.colors.color2,
              color: theme.colors.onColor2
            }}>

            {item.icon}
            <span style={{ marginLeft: item.icon ? '8px' : '0' }}>{item.label}</span>
            <LuChevronRight style={{ marginLeft: 'auto' }} />
          </Menu.TriggerItem >
          <Portal>
            <Menu.Positioner>
              <Menu.Content bg={theme.colors.onColor2}>
                {RenderMenuItems(item.children)}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      );
    }


    return (
      <Menu.Item
        fontSize={"16px"}
        bg={theme.colors.onColor2}
        color={theme.colors.color2}
        _hover={{
          bg: theme.colors.color2,
          color: theme.colors.onColor2
        }}
        key={item.value}
        value={item.value}
        onClick={() => item.href && router.push(item.href)} // Navega se href for fornecido
      >
        {item.icon}
        <span style={{ marginLeft: item.icon ? '8px' : '0' }}>{item.label}</span>
      </Menu.Item>
    );
  });
};

export default function DynamicMenuList({ label, icon, items, href }: DynamicMenuListProps) {
  const { theme } = useTheme();
  const router = useRouter();

  if (!items || items.length === 0) {
    const handleNavigation = () => {
      if (href) {
        router.push(href);
      }
    };

    return (
      <Button
        onClick={handleNavigation}
        size="xl"
        w="250px"
        mt="8px"
        ml="20px"
        mr="20px"
        bg={theme.colors.color0}
        color={theme.colors.onColor2}
        _hover={{
          bg: theme.colors.color4,
          color: theme.colors.onColor4
        }}
        borderRadius={"md"}
        justifyContent="flex-start"
        pl={4}
        fontSize={"16px"}
      >
        {icon}
        {label}
      </Button>
    );
  }

  // Comportamento original se houver 'items'
  return (
    <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
      <Menu.Trigger asChild>
        <Button
          size="xl"
          mt="8px"
          ml="20px"
          mr="20px"
          bg={theme.colors.color0}
          color={theme.colors.onColor2}
          _hover={{
            bg: theme.colors.color4,
            color: theme.colors.onColor4
          }}
          borderRadius={"md"}
          justifyContent="flex-start"
          pl={4}
          onClick={() => href && router.push(href)}
        >
          {icon}
          {label}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner >
          <Menu.Content bg={theme.colors.onColor2}>{RenderMenuItems(items)}</Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}