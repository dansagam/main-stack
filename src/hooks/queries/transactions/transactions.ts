import { getRequest } from '@/helpers/apiCaller';
import { useQuery } from '@tanstack/react-query';
import { GetAllTransactions } from './transaction.response';

export const useGetAllTransaction = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [`useGetAllTransaction`],
    queryFn: () => getRequest<GetAllTransactions>({ url: 'transactions' }),
  });

  return {
    transactions: data || [],
    fetchingTransaction: isLoading,
    isError,
  };
};
