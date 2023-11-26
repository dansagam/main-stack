import React from 'react';
import { PiWarningCircleLight } from 'react-icons/pi';
import { Box, Flex, Text, Title } from '@mantine/core';
import { formatNumber } from '@/helpers/numberFormat';

type WalletCardProps = {
  title: string;
  amount: number;
};
function WalletCard({ amount, title }: WalletCardProps) {
  return (
    <Flex justify="space-between" align="flex-start">
      <Box>
        <Text>{title}</Text>
        <Title order={3}>USD {formatNumber(amount, 2)}</Title>
      </Box>
      <PiWarningCircleLight />
    </Flex>
  );
}

export default WalletCard;
