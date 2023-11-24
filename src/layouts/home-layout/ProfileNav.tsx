import React from 'react';
import { Group, ThemeIcon } from '@mantine/core';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsChatLeftText } from 'react-icons/bs';
import { ProfileDropdown } from './ProfileTab';

function ProfileNav() {
  return (
    <Group gap={28}>
      <ThemeIcon color="white">
        <IoMdNotificationsOutline color="black" />
      </ThemeIcon>
      <ThemeIcon color="white">
        <BsChatLeftText color="black" />
      </ThemeIcon>
      <ProfileDropdown />
    </Group>
  );
}

export default ProfileNav;
