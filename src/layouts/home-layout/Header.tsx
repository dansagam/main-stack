import React from 'react';
import { Group } from '@mantine/core';
import MainLogo from '@/assets/svg/mainstack-logo-main.svg?react';
import classes from './header.module.css';
import ProfileNav from './ProfileNav';
import MainNav from './MainNav';

function Header() {
  return (
    <header className={classes.header}>
      <Group justify="space-between">
        <MainLogo />
        <MainNav />
        <ProfileNav />
      </Group>
    </header>
  );
}

export default Header;
