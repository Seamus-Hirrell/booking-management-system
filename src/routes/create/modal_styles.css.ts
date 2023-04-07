import { style } from 'styled-vanilla-extract/qwik';

export const dialogStyle = style([
  'drac-box',
  'drac-bg-white',
  'drac-border-purple',
]);

export const formStyle = style([
  'drac-box',
  'drac-d-flex',
  {
    'flex-direction': 'column',
    'align-items': 'flex-start',
    gap: '10px',
  },
]);

export const buttonContainerStyle = style([
  'drac-box',
  'drac-d-flex',
  {
    gap: '10px',
  },
]);
