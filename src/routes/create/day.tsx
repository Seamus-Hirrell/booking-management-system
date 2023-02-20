/*
This component displays one day.
Each day begins at 9am and ends at 5pm.
Each day is a row that contains 32 15 minute intervals.
*/

import { component$ } from '@builder.io/qwik';
import type { Models } from 'appwrite';

interface DayProps {
  date: Date;
  appointments: Models.Document[];
}

export const Day = component$((props: DayProps) => {
  // filter appointments to only those that are in the current day
  const appointments = props.appointments.filter((appointment) => {
    const appointmentDate = new Date(appointment.datetime);
    return appointmentDate.getDate() === props.date.getDate();
  });

  const hours = [];
  for (let i = 9; i < 17; i++) {
    hours.push(i);
  }

  const minutes: number[] = [];
  for (let i = 0; i < 60; i += 15) {
    minutes.push(i);
  }

  return (
    <div class="drac-box drac-d-flex" style="gap: 10px">
      <h2 class="drac-heading drac-heading-sm drac-text-white">
        {props.date.toLocaleDateString()}
      </h2>
      {hours.map((hour) => {
        return (
          <div class="drac-box drac-d-flex" style="gap: 10px">
            {minutes.map((minute) => {
              const time = `${hour}:${minute < 10 ? '0' : ''}${minute}`;

              const appointment = appointments.find((appointment) => {
                const appointmentDate = new Date(appointment.datetime);
                return (
                  appointmentDate.getHours() === hour &&
                  appointmentDate.getMinutes() === minute
                );
              });

              return (
                <>
                  {appointment ? (
                    // red box
                    <div class="drac-box drac-d-flex drac-bg-red">
                      <span class="drac-text drac-text-black drac-line-height">
                        {time}
                      </span>
                    </div>
                  ) : (
                    // green box
                    <div class="drac-box drac-d-flex drac-bg-green">
                      <span class="drac-text drac-text-black drac-line-height">
                        {time}
                      </span>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
});
