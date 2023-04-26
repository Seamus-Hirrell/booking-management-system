import { style } from 'styled-vanilla-extract/qwik';

export const labelStyle = style([
  'drac-text',
  'drac-line-height',
  'drac-text-white',
]);

export const inputStyle = style([
  'drac-input',
  'drac-input-green',
  'drac-text-green',
  'drac-input-outline',
  'drac-mb-sm',
]);

export const formStyle = style([
  'drac-box',
  'drac-d-flex',
  'drac-mx-auto',
  'drac-w-md',
  {
    'flex-direction': 'column',
  },
]);

export const formContainerStyle = style([
  formStyle,
  {
    'align-items': 'center',
  },
]);
