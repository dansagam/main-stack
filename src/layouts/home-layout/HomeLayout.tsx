import { Box, Flex, Stack, rem } from '@mantine/core';
import React from 'react';
import Header from './Header';
import { IChildren } from '@/@types/base';
import Sidebar from './Sidebar';

type HomeLayoutProps = IChildren;

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Stack mih={56} gap="md" mx={4} h="100%">
      <Header />
      <Flex gap={rem(30)} px={rem(14)} h="100%">
        <Sidebar />
        <Box>{children}</Box>
      </Flex>
    </Stack>
  );
}

export default HomeLayout;
