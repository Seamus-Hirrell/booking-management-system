import { component$ } from '@builder.io/qwik';
import type { Models } from 'appwrite';

import { CalendarHeader } from './calendarHeader';
import { Day } from './day';

interface CalendarProps {
  weekStart: Date;
  appointments: Models.DocumentList<Models.Document>;
}

export const Calendar = component$((props: CalendarProps) => {
  // filter appointments to only those that are in the current week
  const appointments = props.appointments.documents.filter((appointment) => {
    const appointmentDate = new Date(appointment.datetime);
    const appointmentWeekStart = new Date(
      appointmentDate.getFullYear(),
      appointmentDate.getMonth(),
      appointmentDate.getDate() - appointmentDate.getDay() + 1
    );

    return appointmentWeekStart.getTime() === props.weekStart.getTime();
  });

  return (
    <div class="drac-box">
      <CalendarHeader />
      <Day date={props.weekStart} appointments={appointments} />
      <Day
        date={new Date(props.weekStart.getTime() + 86400000)}
        appointments={appointments}
      />
      <Day
        date={new Date(props.weekStart.getTime() + 172800000)}
        appointments={appointments}
      />
      <Day
        date={new Date(props.weekStart.getTime() + 259200000)}
        appointments={appointments}
      />
      <Day
        date={new Date(props.weekStart.getTime() + 345600000)}
        appointments={appointments}
      />
    </div>
  );
});
