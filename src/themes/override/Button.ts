import { MantineTheme, MantineThemeComponents, Button as MantineButton, rem } from '@mantine/core';

function Button(theme: MantineTheme): MantineThemeComponents {
  return {
    Button: MantineButton.extend({
      defaultProps: {
        size: 'lg',
        variant: 'filled',
        color: theme.colors.dark[8],
        radius: rem(100),
      },
    }),
  };
}

export default Button;
