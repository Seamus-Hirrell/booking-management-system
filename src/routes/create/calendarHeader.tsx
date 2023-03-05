import { component$ } from '@builder.io/qwik';

import { calendarHeaderStyle } from './styles.css';

export const CalendarHeader = component$(() => {
  const hours = [9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div class="drac-box drac-d-flex">
      {hours.map((hour) => {
        return (
          <div class={calendarHeaderStyle}>
            {hour < 12 ? `${hour}am` : `${hour - 12}pm`}
          </div>
        );
      })}
    </div>
  );
});
