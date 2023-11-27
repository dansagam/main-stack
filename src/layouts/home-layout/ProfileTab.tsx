import { Prettify } from '@/@types/base';
import {
  Avatar,
  Group,
  Menu,
  Stack,
  ThemeIcon,
  Title,
  UnstyledButton,
  rem,
  useMantineTheme,
} from '@mantine/core';
import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { HOME_PROFILE_TAB } from './SidebarData';
import { useUserContext } from '@/context/UserContext';
import { getFromFullname } from '@/helpers/getInitials';

type ProfileButtonProps = Prettify<
  React.ComponentPropsWithoutRef<'button'> & {
    name: string;
  }
>;
const ProfileTab = React.forwardRef<HTMLButtonElement, ProfileButtonProps>(
  ({ name, ...rest }, ref) => (
    <UnstyledButton ref={ref} {...rest}>
      <Group
        pl={5}
        wrap="nowrap"
        pr={14}
        py={5}
        style={{ borderRadius: '100px', background: '#EFF1F6' }}
      >
        <Avatar color="white" bg="dark">
          {name}
        </Avatar>
        <CiMenuBurger />
      </Group>
    </UnstyledButton>
  )
);

ProfileTab.displayName = 'ProfileTab';

export default ProfileTab;

export const ProfileDropdown = () => {
  const theme = useMantineTheme();
  const { user } = useUserContext();
  return (
    <Menu position="bottom-end">
      <Menu.Target>
        <ProfileTab name={getFromFullname(`${user?.first_name || ''} ${user?.last_name || ''}`)} />
      </Menu.Target>
      <Menu.Dropdown
        mt={15}
        miw={380}
        style={{ borderRadius: theme.spacing.md, padding: '1rem 1rem' }}
      >
        <Menu.Label display="flex" style={{ alignItems: 'center', gap: '1rem' }}>
          <Avatar color="white" bg="dark">
            OJ
          </Avatar>
          <Stack gap={3}>
            <Title fz={16}>{`${user?.first_name || ''} ${user?.last_name || ''}`}</Title>
            <Title fz={12}>{user?.email}</Title>
          </Stack>
        </Menu.Label>
        {HOME_PROFILE_TAB.map((field, idx) => (
          <Menu.Item
            key={`${field.title}-${idx}`}
            py={10}
            my={10}
            style={{
              borderRadius: rem(100),
            }}
          >
            <Group w="100%">
              <ThemeIcon variant="transparent" color="dark" size="sm">
                <field.icon fontSize={20} />
              </ThemeIcon>
              <Title fz={14} lh={1.5}>
                {field.title}
              </Title>
            </Group>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
