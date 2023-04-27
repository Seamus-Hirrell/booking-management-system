import { component$, Resource, useResource$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { account, databases } from '~/api';
import { divStyle, tdStyle } from './styles.css';

export default component$(() => {
  const userData = useResource$(async () => {
    const user = await account.get();

    console.log('user:', user);

    const appointments = await databases.listDocuments(
      '63bdf02eddbf72fa2abe',
      '6445c1894a6cda3aa31b'
    );

    console.log('appointments', appointments);

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
  });

  return (
    <div
      class="drac-box drac-d-flex"
      style="flex-direction: column; align-items: center; gap: 20px;"
    >
      <h1 class="drac-heading drac-heading-2xl drac-text-white">
        Admin Dashboard
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
          <div class={divStyle}>
            <span class="drac-text drac-line-height drac-text-white">
              Welcome {data.user.name}
            </span>
            <span class="drac-text drac-line-height drac-text-white">
              This page shows all past and future appointments.
            </span>
            <table class="drac-table drac-table-striped drac-table-purple">
              <thead>
                <tr>
                  <th class={tdStyle}>Date</th>
                  <th class={tdStyle}>Time</th>
                  <th class={tdStyle}>Duration</th>
                  <th class={tdStyle}>User</th>
                  <th class={tdStyle}>Reason</th>
                  <th class={tdStyle}>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.appointments.documents.map((appointment: any) => (
                  <tr key={appointment.$id}>
                    <td class={tdStyle}>
                      {new Date(appointment.datetime).toLocaleDateString()}
                    </td>
                    <td class={tdStyle}>
                      {new Date(appointment.datetime).toLocaleTimeString()}
                    </td>
                    <td class={tdStyle}>15 minutes</td>
                    <td class={tdStyle}>{appointment.userid}</td>
                    <td class={tdStyle}>{appointment.reason}</td>
                    <td class={tdStyle}>
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
          </div>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Admin Dashboard',
};
