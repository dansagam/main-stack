import React from 'react';
import { Button, Group, Menu, UnstyledButton } from '@mantine/core';
import { HOME_NAV_LINK, NavLinkProps } from './SidebarData';
import classes from './header.module.css';
import { useSearchParams } from 'react-router-dom';
import { CgMenuGridR } from 'react-icons/cg';

import AppWigget from '@/assets/svg/app-widgets.svg?react';
import AppWiggetDropdown from './AppWiggetDropdown';

type MainNavLinkProps = {
  data: NavLinkProps;
  active?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  onAction(): void;
};
function MainNavLink({ data, active, onAction }: MainNavLinkProps) {
  return (
    <UnstyledButton
      display="flex"
      className={classes['home-nav-link']}
      data-app-active={`${Boolean(active)}`}
      onClick={() => onAction()}
    >
      <data.icon />
      {data.title}
    </UnstyledButton>
  );
}

function MainNav() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabAction = searchParams.get('tab') || '2';
  return (
    <>
      <Group gap={5} justify="center" align="center" display={{ base: 'none', sm: 'flex' }}>
        {HOME_NAV_LINK.map((field, idx) => (
          <MainNavLink
            data={field}
            key={`${field.title}-${idx}`}
            active={Number(tabAction) === idx}
            onAction={() => {
              setSearchParams({ tab: String(idx) });
            }}
          />
        ))}
        <AppWiggetDropdown
          data={{ title: 'App', icon: AppWigget }}
          isActive={Number(tabAction) === 4}
          onAction={() => {
            setSearchParams((prev) => ({ ...prev, tab: String(4) }));
          }}
        />
      </Group>
      <Menu>
        <Menu.Target>
          <Button display={{ base: 'flex', sm: 'none' }} variant="transparent" radius="100%">
            <CgMenuGridR color="dark" />
          </Button>
        </Menu.Target>
        <Group gap={5} justify="center" align="center" display={{ base: 'none', xs: 'flex' }}>
          <Menu.Dropdown>
            {HOME_NAV_LINK.map((field, idx) => (
              <MainNavLink
                data={field}
                key={`${field.title}-${idx}`}
                active={Number(tabAction) === idx}
                onAction={() => {
                  setSearchParams({ tab: String(idx) });
                }}
              />
            ))}
            <AppWiggetDropdown
              data={{ title: 'App', icon: AppWigget }}
              isActive={Number(tabAction) === 4}
              onAction={() => {
                setSearchParams((prev) => ({ ...prev, tab: String(4) }));
              }}
            />
          </Menu.Dropdown>
        </Group>
      </Menu>
    </>
  );
}
export default MainNav;
