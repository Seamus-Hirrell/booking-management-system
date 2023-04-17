/*
This component displays one day.
Each day begins at 9am and ends at 5pm.
Each day is a row that contains 32 15 minute intervals.
*/

import { component$, useSignal, type Signal, Fragment } from '@builder.io/qwik';
import type { Models } from 'appwrite';
import { Modal } from './modal';

import { redBoxStyle, greenBoxStyle } from './styles.css';

interface DayProps {
  date: Date;
  appointments: Models.Document[];
}

export const Day = component$((props: DayProps) => {
  // filter appointments to only those that are in the current day
  const appointments = props.appointments.filter((appointment) => {
    const appointmentDate = new Date(appointment.datetime);
    return appointmentDate.getUTCDate() === props.date.getUTCDate();
  });

  console.log(`appointments for ${props.date.toDateString()}`, appointments);

  const hours = [9, 10, 11, 12, 13, 14, 15, 16];
  const minutes = [0, 15, 30, 45];

  return (
    <div class="drac-box drac-d-flex">
      <div
        class="drac-text drac-text-white drac-line-height"
        style="width: 100px"
      >
        {props.date.toLocaleDateString('en-UK', { weekday: 'long' })}
      </div>
      <div class="drac-box drac-d-flex">
        {hours.map((hour) => {
          return (
            <div
              class="drac-box drac-d-flex"
              key={props.date.getUTCDate() + hour}
            >
              {minutes.map((minute) => {
                const appointment = appointments.find((appointment) => {
                  const appointmentDate = new Date(appointment.datetime);
                  return (
                    appointmentDate.getUTCHours() === hour &&
                    appointmentDate.getUTCMinutes() === minute
                  );
                });

                const dialogRef =
                  // eslint-disable-next-line qwik/use-method-usage
                  useSignal<HTMLDialogElement>() as Signal<HTMLDialogElement>;

                return (
                  <Fragment key={props.date.getUTCDate() + hour + minute}>
                    {appointment ? (
                      <div class={redBoxStyle} key={appointment.$id} />
                    ) : (
                      <div>
                        <button
                          onClick$={() => {
                            dialogRef.value.showModal();
                          }}
                          class={greenBoxStyle}
                          key={props.date.getDate() + hour + minute}
                        />
                        <Modal
                          dateTime={
                            new Date(
                              props.date.getUTCFullYear(),
                              props.date.getUTCMonth(),
                              props.date.getUTCDate(),
                              hour,
                              minute
                            )
                          }
                          dialogRef={dialogRef}
                        />
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
});
