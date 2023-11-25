import { getRequest } from '@/helpers/apiCaller';
import { useQuery } from '@tanstack/react-query';
import { GetUser } from './user.response';

interface UseGetUserProps {
  enabler?: boolean;
}
export const useGetUser = ({ enabler }: UseGetUserProps) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [`useGetUser`],
    queryFn: () => getRequest<GetUser>({ url: 'user' }),
    enabled: enabler,
  });

  return {
    user: data,
    fetchingUser: isLoading,
    isError,
  };
};
