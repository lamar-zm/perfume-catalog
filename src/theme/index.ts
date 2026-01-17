'use client';

import { createTheme, MantineColorsTuple } from '@mantine/core';

// Elegant dark rose gold theme for luxury perfume brand
const brandColor: MantineColorsTuple = [
  '#fdf4f5',
  '#f4e4e6',
  '#e8c4c9',
  '#dba1a9',
  '#d1848f',
  '#c96b77',
  '#b8525f',
  '#9a404c',
  '#7d3440',
  '#612833',
];

const goldAccent: MantineColorsTuple = [
  '#fefbf3',
  '#faf3e0',
  '#f3e4ba',
  '#ebd391',
  '#e4c36d',
  '#d4a84a',
  '#c4943a',
  '#a67c2e',
  '#876424',
  '#6b4f1c',
];

export const theme = createTheme({
  // Brand colors
  colors: {
    brand: brandColor,
    gold: goldAccent,
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
