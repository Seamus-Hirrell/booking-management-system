import { style } from 'styled-vanilla-extract/qwik';

export const formStyle = style([
  'drac-box',
  'drac-d-flex',
  'drac-mx-auto',
  {
    'flex-direction': 'column',
    'align-items': 'center',
    'max-width': '800px',
    gap: '10px',
  },
]);
