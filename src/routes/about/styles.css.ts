import { style } from 'styled-vanilla-extract/qwik';
import { globalStyle } from '@vanilla-extract/css';

export const aboutStyle = style([
  'drac-box',
  'drac-d-flex',
  'drac-mx-auto',
  {
    'flex-direction': 'column',
    'align-items': 'center',
    'max-width': '800px',
  },
]);

export const paragraphStyle = globalStyle('p', {
  textAlign: 'justify',
});
