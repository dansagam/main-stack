import React from 'react';
import { Group, ThemeIcon, useMantineColorScheme } from '@mantine/core';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsChatLeftText } from 'react-icons/bs';
import { MdModeNight, MdOutlineLightMode } from 'react-icons/md';
import { ProfileDropdown } from './ProfileTab';

function ProfileNav() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  return (
    <Group gap={5} wrap="nowrap">
      <ThemeIcon
        color="white"
        onClick={() => {
          if (colorScheme === 'dark') {
            setColorScheme('light');
          } else {
            setColorScheme('dark');
          }
        }}
      >
        {colorScheme === 'dark' ? (
          <MdOutlineLightMode color="black" />
        ) : (
          <MdModeNight color="black" />
        )}
      </ThemeIcon>
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
