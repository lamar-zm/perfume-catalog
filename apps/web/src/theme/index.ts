'use client';

import { createTheme, MantineColorsTuple } from '@mantine/core';

// Cyan brand theme for app identity
const brandColor: MantineColorsTuple = [
  '#f0fdff',
  '#dff9fb',
  '#c8f2f7',
  '#aeeaf2',
  '#84e0ea',
  '#33cfe0',
  '#19a6b0',
  '#0b7b86',
  '#07545f',
  '#05383f',
];

const accentNeutral: MantineColorsTuple = [
  '#ffffff',
  '#fafafa',
  '#f5f5f5',
  '#eeeeee',
  '#e0e0e0',
  '#bdbdbd',
  '#9e9e9e',
  '#757575',
  '#616161',
  '#424242',
];

export const theme = createTheme({
  // Brand colors (identity uses cyan)
  colors: {
    brand: brandColor,
    neutral: accentNeutral,
  },
  primaryColor: 'brand',
  
  // Typography
  fontFamily: 'Tajawal, Arial, sans-serif',
  headings: {
    fontFamily: 'Tajawal, Arial, sans-serif',
    fontWeight: '700',
  },
  
  // Default radius
  defaultRadius: 'md',
  
  // Component defaults
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
    Card: {
      defaultProps: {
        radius: 'lg',
        shadow: 'sm',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
    Textarea: {
      defaultProps: {
        radius: 'md',
      },
    },
    Select: {
      defaultProps: {
        radius: 'md',
      },
    },
    NumberInput: {
      defaultProps: {
        radius: 'md',
      },
    },
  },
  
  // Other settings
  respectReducedMotion: true,
  cursorType: 'pointer',
});
