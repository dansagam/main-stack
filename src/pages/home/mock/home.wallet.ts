import { GetWalletResponse } from '@/hooks/queries/wallet/wallet.response';

export const walletMock = (values?: GetWalletResponse) => [
  {
    title: 'Ledger Balance',
    amount: values?.balance || 0,
  },
  {
    title: 'Total Payout',
    amount: values?.total_payout || 0,
  },
  {
    title: 'Total Revenue',
    amount: values?.total_revenue || 0,
  },
  {
    title: 'Pending Payout',
    amount: values?.pending_payout || 0,
  },
];
