import { component$ } from '@builder.io/qwik';

import {
  calendarHeaderSectionStyle,
  calendarHeaderSpaceStyle,
} from './styles.css';

export const CalendarHeader = component$(() => {
  const hours = [9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div class="drac-box drac-d-flex">
      <div class={calendarHeaderSpaceStyle} />
      {hours.map((hour) => {
        return (
          <div class={calendarHeaderSectionStyle}>
            {hour < 12 ? `${hour}am` : `${hour - 12}pm`}
          </div>
        );
      })}
    </div>
  );
});
