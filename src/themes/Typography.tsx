// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MantineThemeOverride } from '@mantine/core';

export const FONT_FAMITY: string = '';

function Typography(): MantineThemeOverride {
  return {
    headings: {
      fontFamily: 'Mulish var(--font-inter)',
    },
  };
}

export default Typography;
