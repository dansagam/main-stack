// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { MantineThemeOverride } from '@mantine/core';
import Button from './Button';

function ComponentOverride(theme: MantineThemeOverride) {
  return {
    ...Button(theme),
  };
}

export default ComponentOverride;
