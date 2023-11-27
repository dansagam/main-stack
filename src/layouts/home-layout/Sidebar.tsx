import { Flex, Stack } from '@mantine/core';
import React from 'react';
import classes from './sidebar.module.css';
import HOME_SIDEBAR_DATA from './SidebarData';
import SidebarLink from './SidebarLink';

function Sidebar() {
  return (
    <Stack
      h="100%"
      justify="center"
      display={{ base: 'none', sm: 'flex', md: 'flex', lg: 'flex', xs: 'flex' }}
    >
      <Flex direction="column" gap={16} px={8} py={6} className={classes['app-sidebar-container']}>
        {HOME_SIDEBAR_DATA.map((sidebar, idx) => (
          <SidebarLink data={sidebar} key={`${sidebar.title}-${idx}`} />
        ))}
      </Flex>
    </Stack>
  );
}

export default Sidebar;
