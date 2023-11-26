import React from 'react';
import { Box, Button, Flex, Grid, Stack, Text, Title, rem, useMantineTheme } from '@mantine/core';
import { walletMock } from './mock/home.wallet';
import WalletCard from './components/WalletCard';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { useGetWallet } from '@/hooks/queries/wallet/wallet';
import { useGetAllTransaction } from '@/hooks/queries/transactions/transactions';
import { GrDownload } from 'react-icons/gr';
import { IoIosArrowDown, IoIosArrowRoundBack } from 'react-icons/io';
import { GetAllTransactionsReponseData } from '@/hooks/queries/transactions/transaction.response';
import dayjs from 'dayjs';

function HomePage() {
  const { wallet } = useGetWallet();
  const { transactions } = useGetAllTransaction();
  const theme = useMantineTheme();

  const renderFirstColumn = (values: GetAllTransactionsReponseData) => {
    console.log('rendee');
    return (
      <Flex gap={10}>
        <IoIosArrowRoundBack />
        <Box>
          <Text>{values?.metadata?.country}</Text>
          <Text>{values?.metadata?.name}</Text>
        </Box>
      </Flex>
    );
  };
  return (
    <Box>
      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
        <Grid.Col span={{ sm: 12, md: 6, lg: 8 }}>the Graph coming here</Grid.Col>
        <Grid.Col span={{ sm: 12, md: 6, lg: 4 }}>
          <Stack>
            {walletMock(wallet).map((field, idx) => (
              <WalletCard key={`${field.title}-${idx}`} title={field.title} amount={field.amount} />
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={12} style={{ position: 'relative' }}>
          <Box style={{ maxHeight: rem('50vh'), overflow: 'auto' }}>
            <Flex
              justify="space-between"
              gap={12}
              align="center"
              color="white"
              style={{
                borderBottom: '1px solid #EFF1F6',
                position: 'sticky',
                top: 0,
                zIndex: 2,
                marginBottom: '5px',
              }}
            >
              <Box style={{ flex: 1 }}>
                <Title>{transactions.length} Transactions</Title>
                <Text>Your transactions for the last 7 days</Text>
              </Box>
              <Flex gap={12} align="center">
                <Button color="gray" rightSection={<IoIosArrowDown />}>
                  Filter
                </Button>
                <Button color="gray" rightSection={<GrDownload />}>
                  Export List
                </Button>
              </Flex>
            </Flex>
            <Grid>
              {transactions.map((field, idx) => (
                <React.Fragment key={`${field.payment_reference}-${idx}`}>
                  <Grid.Col span={{ sm: 6, md: 6, lg: 9 }}>{renderFirstColumn(field)}</Grid.Col>
                  <Grid.Col span={{ sm: 6, md: 6, lg: 3 }}>
                    <Stack align="flex-end">
                      <Title order={5}>USD {field?.amount || 0}</Title>
                      <Text>{dayjs(field.date).format('MMM DD, YYYY')}</Text>
                    </Stack>
                  </Grid.Col>
                </React.Fragment>
              ))}
            </Grid>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default HomePage;
