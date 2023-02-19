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
    <div>
      <h2>{props.date.toLocaleDateString()}</h2>
      <div>
        {hours.map((hour) => {
          return (
            <div>
              {minutes.map((minute) => {
                const time = `${hour}:${minute}`;
                const appointment = appointments.find((appointment) => {
                  const appointmentDate = new Date(appointment.datetime);
                  return (
                    appointmentDate.getHours() === hour &&
                    appointmentDate.getMinutes() === minute
                  );
                });

                return (
                  <div>
                    {appointment ? (
                      <div>
                        <span>{appointment.datetime}</span>
                        <span>{appointment.userid}</span>
                      </div>
                    ) : (
                      <div>
                        <span>{time}</span>
                        <span>Available</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
});
