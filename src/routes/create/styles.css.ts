import { globalStyle } from '@vanilla-extract/css';
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

export const boxWidth = 55;
export const boxHeight = 30;

// box style
export const boxStyle = style([
  'drac-box',
  'drac-border-black',
  {
    width: `${boxWidth}px`,
    height: `${boxHeight}px`,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: 'unset',
  },
]);

// red box style
export const redBoxStyle = style(['drac-bg-red', boxStyle]);

// green box style
export const greenBoxStyle = style(['drac-bg-green', 'drac-btn', boxStyle]);

// calendar header style
export const calendarHeaderSpaceStyle = style([
  'drac-box',
  {
    width: '100px',
  },
]);

// calendar header section style
export const calendarHeaderSectionStyle = style([
  'drac-box',
  'drac-d-flex',
  'drac-text',
  'drac-text-white',
  'drac-line-height',
  {
    width: boxWidth,
    justifyContent: 'space-between',
  },
]);

export const dividerStyle = style([
  'drac-box',
  'drac-border-purple',
  {
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
  },
]);

export const dialogStyle = style([
  'drac-box',
  'drac-bg-white',
  'drac-border-purple',
]);

globalStyle('::backdrop', {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
});
