import { MantineTheme, MantineThemeComponents, Button as MantineButton } from '@mantine/core';

function Button(theme: MantineTheme): MantineThemeComponents {
  return {
    Button: MantineButton.extend({
      defaultProps: {
        size: 'lg',
        variant: 'filled',
        color: theme.primaryColor,
      },
    }),
  };
}

export default Button;
