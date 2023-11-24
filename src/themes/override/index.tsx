// eslint-disable-next-line no-unused-vars
import React from 'react';
import { DEFAULT_THEME, MantineTheme } from '@mantine/core';
import Button from './Button';

function ComponentOverride(theme: MantineTheme) {
  return {
    ...DEFAULT_THEME.components,
    ...Button(theme),
  };
}

export default ComponentOverride;
