import React from 'react';
import { AppMenuItemType, HOME_APP_MENU_LINK, NavLinkProps } from './SidebarData';
import {
  Flex,
  Group,
  Menu,
  Stack,
  ThemeIcon,
  Title,
  UnstyledButton,
  rem,
  useMantineTheme,
} from '@mantine/core';
import classes from './header.module.css';

type AppWiggetRefProps = React.ComponentPropsWithoutRef<'button'> & {
  data: NavLinkProps;
  isActive?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  onAction(): void;
};
const AppWiggetRef = React.forwardRef<HTMLButtonElement, AppWiggetRefProps>(
  ({ data, isActive, onAction, onClick, ...rest }, ref) => (
    <UnstyledButton
      ref={ref}
      display="flex"
      className={classes['home-nav-link']}
      data-app-active={`${Boolean(isActive)}`}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
        onAction();
      }}
      {...rest}
    >
      <data.icon />
      {data.title}
    </UnstyledButton>
  )
);

AppWiggetRef.displayName = 'AppWiggetRef';

type AppMenuItemProps = {
  data: AppMenuItemType;
};
const AppMenuItem = ({ data }: AppMenuItemProps) => (
  <Menu.Item style={{ borderRadius: rem(20) }}>
    <Group>
      <Flex gap={10} align="center">
        <ThemeIcon color="white">
          <data.icon />
        </ThemeIcon>
        <Stack>
          <Title fz={16}>{data.title}</Title>
          <Title fz={12}>{data.description}</Title>
        </Stack>
      </Flex>
    </Group>
  </Menu.Item>
);

type AppWiggetDropdownProps = {
  data: NavLinkProps;
  isActive?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  onAction(): void;
};

function AppWiggetDropdown({ data, onAction, isActive }: AppWiggetDropdownProps) {
  const theme = useMantineTheme();
  return (
    <Menu position="bottom">
      <Menu.Target>
        <AppWiggetRef data={data} onAction={onAction} isActive={isActive} />
      </Menu.Target>
      <Menu.Dropdown
        mt={15}
        miw={380}
        style={{ borderRadius: theme.spacing.md, padding: '1rem 1rem' }}
      >
        {HOME_APP_MENU_LINK.map((link, idx) => (
          <AppMenuItem data={link} key={`${link.title}-${idx}`} />
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

export default AppWiggetDropdown;
