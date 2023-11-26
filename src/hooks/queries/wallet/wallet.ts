import { getRequest } from '@/helpers/apiCaller';
import { useQuery } from '@tanstack/react-query';
import { GetWalletResponse } from './wallet.response';

export const useGetWallet = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [`useGetWallet`],
    queryFn: () => getRequest<GetWalletResponse>({ url: 'wallet' }),
  });

  return {
    wallet: data,
    isError,
    fetchingWallet: isLoading,
  };
};
