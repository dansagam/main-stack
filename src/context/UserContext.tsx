import React from 'react';
import { IChildren } from '@/@types/base';
import { useGetUser } from '@/hooks/queries/users/user';
import { GetUser } from '@/hooks/queries/users/user.response';

type UserContextProps = {
  user?: GetUser;
};
const UserContext = React.createContext<UserContextProps>({});

function UserContextProvider({ children }: IChildren) {
  const { user } = useGetUser({ enabler: true });

  return (
    <>
      <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    </>
  );
}

export default UserContextProvider;

export const useUserContext = () => {
  const { user } = React.useContext(UserContext);
  const memorisedUser = React.useMemo(() => user, [user]);

  return {
    user: memorisedUser,
  };
};
