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

export const spanStyle = style([
  'drac-text',
  'drac-text-white',
  'drac-line-height',
]);

export const dividerStyle = style([
  'drac-box',
  'drac-border-purple',
  'drac-w-6xl',
  {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
  },
]);

export const verticalDividerStyle = style([
  'drac-box',
  'drac-border-purple',
  'drac-h-auto',
  {
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
  },
]);
