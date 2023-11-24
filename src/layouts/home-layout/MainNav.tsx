import React from 'react';
import { Group, UnstyledButton } from '@mantine/core';
import { HOME_NAV_LINK, NavLinkProps } from './SidebarData';
import classes from './header.module.css';
import { useSearchParams } from 'react-router-dom';

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
    <Group gap={20} justify="center" align="center">
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
  );
}
export default MainNav;
