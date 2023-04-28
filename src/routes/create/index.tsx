import {
  component$,
  Resource,
  useResource$,
  useSignal,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { account, databases } from '~/api';

import { Calendar } from './calendar';
import { WeekSelector } from './weekSelector';

export default component$(() => {
  const weekStart = useSignal(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() - new Date().getDay() + 1
    )
  );

  console.log('weekStart', weekStart.value);

  const userData = useResource$(async () => {
    const user = await account.get();

    const appointments = await databases.listDocuments(
      '63bdf02eddbf72fa2abe',
      '6445c1894a6cda3aa31b'
    );

    return {
      user,
      appointments,
    };
  });

  return (
    <div
      class="drac-box drac-d-flex"
      style="flex-direction: column; align-items: center; gap: 20px;"
    >
      <h1 class="drac-heading drac-heading-2xl drac-text-white">
        Create New Appointment
      </h1>
      <Resource
        value={userData}
        onPending={() => <span>loading...</span>}
        onRejected={(error) => (
          <span class="drac-text drac-line-height drac-text-white">
            You must be logged in to view this page
            <br /> error: {error.message}
          </span>
        )}
        onResolved={(data) => (
          <>
            <span class="drac-text drac-line-height drac-text-white">
              Welcome {data.user.name}
            </span>
            <WeekSelector weekStart={weekStart} />
            <Calendar
              weekStart={weekStart.value}
              appointments={data.appointments}
            />
          </>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Create Appointment',
};
