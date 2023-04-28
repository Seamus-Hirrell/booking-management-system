import {
  component$,
  Resource,
  useResource$,
  $,
  useSignal,
} from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';

import { account, databases } from '~/api';

export default component$(() => {
  const shouldRefreshUserData = useSignal(false);
  const userData = useResource$(async ({ track }) => {
    track(() => shouldRefreshUserData.value);
    shouldRefreshUserData.value = false;

    const user = await account.get();

    console.log('user', user);

    const appointments = await databases.listDocuments(
      '63bdf02eddbf72fa2abe',
      '6445c1894a6cda3aa31b'
    );

    console.log('appointments', appointments);

    // filter appointments to only those that are owned by the user
    appointments.documents = appointments.documents.filter(
      (appointment) => appointment.userid === user.$id
    );

    // filter appointments to only those that are in the future
    appointments.documents = appointments.documents.filter(
      (appointment) => new Date(appointment.datetime) > new Date()
    );

    // sort appointments by date
    appointments.documents.sort(
      (a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
    );

    return {
      user,
      appointments,
    };
  });

  const deleteAppointment = $(async (id: string) => {
    await databases.deleteDocument(
      '63bdf02eddbf72fa2abe',
      '6445c1894a6cda3aa31b',
      id
    );
    alert('Appointment deleted');
    shouldRefreshUserData.value = true;
  });

  return (
    <div
      class="drac-box drac-d-flex"
      style="flex-direction: column; align-items: center; gap: 20px;"
    >
      <h1 class="drac-heading drac-heading-2xl drac-text-white">Dashboard</h1>
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
            <Link
              class="drac-btn drac-bg-purple drac-text-black"
              href="/create"
            >
              Create New Appointment
            </Link>
            <table
              class="drac-table drac-table-striped drac-table-purple"
              style="max-width: 400px"
            >
              <thead>
                <tr>
                  <th class="drac-text drac-text-white">Date</th>
                  <th class="drac-text drac-text-white">Time</th>
                  <th class="drac-text drac-text-white">Duration</th>
                  <th class="drac-text drac-text-white">Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.appointments.documents.map((appointment: any) => (
                  <tr key={appointment.$id}>
                    <td class="drac-text drac-text-white">
                      {new Date(appointment.datetime).toLocaleDateString()}
                    </td>
                    <td class="drac-text drac-text-white">
                      {new Date(appointment.datetime).toLocaleTimeString()}
                    </td>
                    <td class="drac-text drac-text-white">15 minutes</td>
                    <td class="drac-text drac-text-white">
                      <button
                        class="drac-btn drac-bg-red drac-text-black"
                        onClick$={() => deleteAppointment(appointment.$id)}
                      >
                        &#10006;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Dashboard',
};
