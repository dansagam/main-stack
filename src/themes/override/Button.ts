import { MantineThemeComponents, MantineThemeOverride } from '@mantine/core';

function Button(theme: MantineThemeOverride): MantineThemeComponents {
  return {
    Button: {
      defaultProps: {
        size: 'lg',
        variant: 'filled',
        color: theme?.colors?.dark,
      },
    },
  };
}

export default Button;
