import { getRequest } from '@/helpers/apiCaller';
import { useQuery } from '@tanstack/react-query';

export const useGetWallet = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [`useGetWallet`],
    queryFn: () => getRequest({ url: 'wallet' }),
  });

  return {
    wallet: data,
    isError,
    fetchingWallet: isLoading,
  };
};
