import { Box, Flex, Stack, rem } from '@mantine/core';
import React from 'react';
import Header from './Header';
import { IChildren } from '@/@types/base';
import Sidebar from './Sidebar';

type HomeLayoutProps = IChildren;

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Stack gap="md" mx={4} h="100vh">
      <Header />
      <Flex
        gap={rem(30)}
        px={rem(14)}
        style={{ flex: 1 }}
        mr={{ sm: 0, md: rem(30), lg: rem(140) }}
      >
        <Sidebar />
        <Box>{children}</Box>
      </Flex>
    </Stack>
  );
}

export default HomeLayout;
