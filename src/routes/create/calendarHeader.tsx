import { component$ } from '@builder.io/qwik';

import {
  calendarHeaderSectionStyle,
  calendarHeaderSpaceStyle,
  dividerStyle,
} from './styles.css';

export const CalendarHeader = component$(() => {
  const hours = [9, 10, 11, 12, 13, 14, 15, 16];
  const minutes = [0, 15, 30, 45];

  return (
    <div class="drac-box drac-d-flex">
      <div class={calendarHeaderSpaceStyle} />
      {hours.map((hour) => {
        return minutes.map((minute) => {
          const time = `${hour}:${minute < 10 ? '0' : ''}${minute}`;
          return (
            <div class={calendarHeaderSectionStyle}>
              {time !== '9:00' ? <div class={dividerStyle} /> : <div />}
              {time}
              {time !== '16:45' ? <div class={dividerStyle} /> : <div />}
            </div>
          );
        });
      })}
    </div>
  );
});
