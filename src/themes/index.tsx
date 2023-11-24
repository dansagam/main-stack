import React from 'react';
import { MantineProvider, MantineThemeOverride, createTheme } from '@mantine/core';
import { IChildren } from '@/@types/base';

type ThemeProviderProps = IChildren;

function ThemeProvider({ children }: ThemeProviderProps) {
  const themeOptions = React.useMemo<MantineThemeOverride>(() => ({}), []);

  const theme = createTheme(themeOptions);
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}

export default ThemeProvider;
