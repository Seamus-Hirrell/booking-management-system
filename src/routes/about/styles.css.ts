import { style } from 'styled-vanilla-extract/qwik';

export const contactStyle = style([
  'drac-box',
  'drac-d-flex',
  'drac-w-md',
  {
    'flex-direction': 'column',
    'align-items': 'flex-start',
    gap: '1rem',
  },
]);

export const contactContainerStyle = style([
  'drac-box',
  'drac-d-flex',
  'drac-w-auto',
  {
    'flex-direction': 'row',
    'align-items': 'space-between',
    gap: '1rem',
  },
]);
