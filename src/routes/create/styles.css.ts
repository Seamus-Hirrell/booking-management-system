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

// red box style
export const redBoxStyle = style([
  'drac-box',
  'drac-bg-red',
  {
    'width': '10px',
    'height': '10px',
  },
]);

// green box style
export const greenBoxStyle = style([
  'drac-box',
  'drac-bg-green',
  {
    'width': '10px',
    'height': '10px',
  },
]);