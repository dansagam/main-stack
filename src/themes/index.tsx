import React from 'react';
import { MantineProvider, MantineThemeOverride, createTheme } from '@mantine/core';
import { IChildren } from '@/@types/base';
import ComponentOverride from './override';

type ThemeProviderProps = IChildren;

function ThemeProvider({ children }: ThemeProviderProps) {
  const themeOptions = React.useMemo<MantineThemeOverride>(() => ({}), []);

  const theme = createTheme(themeOptions);
  theme.components = ComponentOverride(theme);

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}

export default ThemeProvider;
