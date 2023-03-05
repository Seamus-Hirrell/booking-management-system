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

export const boxWidth = 45;
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
  },
]);

// red box style
export const redBoxStyle = style(['drac-bg-red', boxStyle]);

// green box style
export const greenBoxStyle = style(['drac-bg-green', boxStyle]);

// calendar header style
export const calendarHeaderStyle = style([
  'drac-box',
  'drac-text',
  'drac-text-white',
  'drac-line-height',
  {
    width: `${boxWidth * 4}px`,
  },
]);