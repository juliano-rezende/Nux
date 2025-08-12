"use client";

import React, { ReactElement } from 'react';
import { Menu, Button, MenuItem, Portal } from '@chakra-ui/react';
import { LuChevronRight } from 'react-icons/lu';
import { useTheme } from '@/context/ThemeContext';



// Define a interface para os itens do menu
interface MenuItemProps {
  value: string;
  label: string;
  icon?: ReactElement;
  children?: MenuItemProps[];
}



// Props do componente principal
interface DynamicMenuListProps {
  label: string;
  icon?: ReactElement;
  items: MenuItemProps[];
}



// Função recursiva para renderizar os itens do menu e submenus
const renderMenuItems = (items: MenuItemProps[]) => {
  

  return items.map((item) => {
    const { theme } = useTheme();

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
                {renderMenuItems(item.children)}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      );
    }

    
    return (
      <Menu.Item 
        bg={theme.colors.onColor2} 
        color={theme.colors.color2} 
        _hover={{ 
          bg: theme.colors.color2,
          color: theme.colors.onColor2
        }}  
        key={item.value} 
        value={item.value}>
        {item.icon}
        <span style={{ marginLeft: item.icon ? '8px' : '0' }}>{item.label}</span>
      </Menu.Item>
    );
  });
};




export default function DynamicMenuList({ label, icon, items }: DynamicMenuListProps) {
  const { theme } = useTheme();

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button 
          size="md"
          w= "90%"
          bg={theme.colors.onColor2} 
          color={theme.colors.onColor6} 
          _hover={{ 
            bg: theme.colors.color4,
            color: theme.colors.onColor4
          }} 
          _active={{ 
            bg: theme.colors.color8 
          }} 
          _focus={{ boxShadow: "none" }} 
          borderRadius={"md"} 
          fontSize={"16px"}>
          {icon}
          <span style={{ marginLeft: icon ? '8px' : '0' }}>{label}</span>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner >
          <Menu.Content bg={theme.colors.onColor2}>{renderMenuItems(items)}</Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}