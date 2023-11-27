import React from 'react';
import { Box, Button, Flex, Grid, Stack, Text, Title, rem, useMantineTheme } from '@mantine/core';
import { walletMock } from './mock/home.wallet';
import { Props as ChartProps } from 'react-apexcharts';
import WalletCard from './components/WalletCard';
import { useGetWallet } from '@/hooks/queries/wallet/wallet';
import { useGetAllTransaction } from '@/hooks/queries/transactions/transactions';
import { GrDownload } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import { GetAllTransactionsReponseData } from '@/hooks/queries/transactions/transaction.response';
import DownIcon from '@/assets/svg/down-green-icon.svg?react';
import UpIcon from '@/assets/svg/up-pink-icon.svg?react';

import dayjs from 'dayjs';
import FilterDrawer from './components/FilterDrawer';
import useWindowDimension from '@/layouts/home-layout/useWindowDimension';
import LineChart from '@/shared/charts/LineChart';
import './home-page.css';
import { formatNumber } from '@/helpers/numberFormat';

const IconObj = {
  deposit: <DownIcon />,
  withdrawal: <UpIcon />,
};

function HomePage() {
  const { wallet } = useGetWallet();
  const [open, setOpen] = React.useState(false);
  const { transactions } = useGetAllTransaction();
  // eslint-disable-next-line no-unused-vars
  const theme = useMantineTheme();
  const { width } = useWindowDimension();

  const renderFirstColumn = (values: GetAllTransactionsReponseData) => (
    <Flex gap={10} align="center">
      {IconObj[values?.type || 'deposit']}
      <Box>
        <Text fz={rem(16)} fw="normal" fs="normal">
          {values?.metadata?.country}
        </Text>
        <Text c="gray" mt={10} fz={rem(14)} fw="normal" fs="normal">
          {values?.metadata?.name}
        </Text>
      </Box>
    </Flex>
  );

  const sortedTransactions = transactions.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const customToltip = (): ChartProps['options'] => ({
    tooltip: {
      custom({ series, seriesIndex, dataPointIndex, w }) {
        // console.log({ series, seriesIndex, dataPointIndex, w });
        return (
          `<div class="chart-app-container">` +
          `<div class="chart-app-content chart-app-title"> <span> Month:</span> ${w.globals.categoryLabels[dataPointIndex]} </div>` +
          `<div class="chart-app-content"> <span>Amount:</span> USD  ${series[seriesIndex][dataPointIndex]} </div> ` +
          `</div>`
        );
      },
    },
  });

  return (
    <>
      <Box>
        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
          <Grid.Col span={{ sm: 12, md: 6, lg: 9 }}>
            <Box h="100%">
              <Flex justify="flex-start" gap={10}>
                <Box>
                  <Text fz={10} c="gray">
                    Available Balance
                  </Text>
                  <Title order={3}>USD{formatNumber(wallet?.balance || 0, 2)}</Title>
                </Box>
                <Button color="dark">Withdraw</Button>
              </Flex>
              <LineChart
                width={width}
                xResults={sortedTransactions.map((field) =>
                  field?.date
                    ? dayjs(field.date).format(width && width < 459 ? 'MMM DD' : 'MMM DD, YYYY')
                    : '-'
                )}
                yResults={sortedTransactions.map((field) => field.amount)}
                xAxis={customToltip()}
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={{ sm: 12, md: 6, lg: 3 }}>
            <Stack gap={32}>
              {walletMock(wallet).map((field, idx) => (
                <WalletCard
                  key={`${field.title}-${idx}`}
                  title={field.title}
                  amount={field.amount}
                />
              ))}
            </Stack>
          </Grid.Col>
          <Grid.Col span={12} style={{ position: 'relative' }}>
            <Box>
              <Flex
                justify="space-between"
                gap={12}
                align="center"
                color="white"
                pb={15}
                style={{
                  borderBottom: '1px solid #EFF1F6',
                  position: 'sticky',
                  top: 0,
                  zIndex: 33,
                  marginBottom: '5px',
                  opacity: 1,
                }}
              >
                <Box style={{ flex: 1 }}>
                  <Title order={5} fz={{ md: rem(24), base: rem(20) }}>
                    {transactions.length} Transactions
                  </Title>
                  <Text c="gray" fz={rem(13)}>
                    Your transactions for the last 7 days
                  </Text>
                </Box>
                <Flex gap={12} align="center">
                  <Button
                    color="custom-gray"
                    variant="light"
                    rightSection={<IoIosArrowDown />}
                    size="compact-xl"
                    onClick={() => {
                      setOpen(true);
                    }}
                    style={{ color: theme.colors.dark[7], borderRadius: rem(100) }}
                  >
                    Filter
                  </Button>
                  <Button
                    color="custom-gray"
                    variant="light"
                    size="compact-xl"
                    rightSection={<GrDownload />}
                    style={{ color: theme.colors.dark[7], borderRadius: rem(100) }}
                  >
                    {width && width < 450 ? '' : 'Export List'}
                  </Button>
                </Flex>
              </Flex>
              <Grid
                px={{ md: 10 }}
                gutter={24}
                mt={33}
                style={{ maxHeight: rem('50vh'), overflowY: 'auto' }}
              >
                {transactions.map((field, idx) => (
                  <React.Fragment key={`${field.payment_reference}-${idx}`}>
                    <Grid.Col span={{ sm: 6, md: 6, lg: 9, base: 6 }}>
                      {renderFirstColumn(field)}
                    </Grid.Col>
                    <Grid.Col span={{ sm: 6, md: 6, lg: 3, base: 6 }}>
                      <Stack align="flex-end">
                        <Title order={5}>USD {field?.amount || 0}</Title>
                        <Text c="gray" fz={rem(12)}>
                          {dayjs(field.date).format('MMM DD, YYYY')}
                        </Text>
                      </Stack>
                    </Grid.Col>
                  </React.Fragment>
                ))}
              </Grid>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
      <FilterDrawer
        open={open}
        onAction={() => {}}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}

export default HomePage;
