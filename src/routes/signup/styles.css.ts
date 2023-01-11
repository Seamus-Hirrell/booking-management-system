import { style } from 'styled-vanilla-extract/qwik';

export const boxStyle = style([
  'drac-box',
  'drac-d-flex',
  'drac-mx-auto',
  {
    'flex-direction': 'column',
    'align-items': 'center',
    gap: '10px',
  },
]);
