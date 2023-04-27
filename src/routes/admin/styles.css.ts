import { style } from 'styled-vanilla-extract/qwik';

export const tdStyle = style(['drac-text', 'drac-text-white']);

export const divStyle = style([
  'drac-box',
  'drac-d-flex',
  {
    'flex-direction': 'column',
    'align-items': 'center',
    gap: '1rem',
  },
]);
