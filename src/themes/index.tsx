import 'dayjs/locale/en';
import React from 'react';
import {
  MantineProvider,
  MantineThemeOverride,
  createTheme,
  DEFAULT_THEME,
  mergeMantineTheme,
} from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { IChildren } from '@/@types/base';
import ComponentOverride from './override';
import Typography from './Typography';
import { CustomColors } from './Colors';

type ThemeProviderProps = IChildren;

function ThemeProvider({ children }: ThemeProviderProps) {
  const themeOptions = React.useMemo<MantineThemeOverride>(
    () => ({
      ...Typography(),
      ...CustomColors(),
    }),
    []
  );

  const theme = mergeMantineTheme(DEFAULT_THEME, createTheme(themeOptions));

  theme.components = ComponentOverride(theme);

  return (
    <DatesProvider
      settings={{ locale: 'en', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}
    >
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </DatesProvider>
  );
}

export default ThemeProvider;
