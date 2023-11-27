import React from 'react';
import { PiWarningCircleLight } from 'react-icons/pi';
import { Box, Flex, Text, Title, rem } from '@mantine/core';
import { formatNumber } from '@/helpers/numberFormat';

type WalletCardProps = {
  title: string;
  amount: number;
};
function WalletCard({ amount, title }: WalletCardProps) {
  return (
    <Flex justify="space-between" align="flex-start">
      <Box>
        <Text fs={rem(10)} c="gray">
          {title}
        </Text>
        <Title fs={rem(24)} order={3}>
          USD {formatNumber(amount, 2)}
        </Title>
      </Box>
      <PiWarningCircleLight fontSize={rem(20)} color="gray" />
    </Flex>
  );
}

export default WalletCard;
