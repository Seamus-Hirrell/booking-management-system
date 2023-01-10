import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { Query } from 'appwrite';

import { account, databases } from '~/api';

export default component$(() => {
  const userData = useResource$(async () => {
    const user = await account.get();

    const appointments = await databases.listDocuments(
      '63bdf02eddbf72fa2abe',
      '63bdf0455a708734ce9b',
      [Query.equal('userid', user.$id)]
    );

    return {
      user,
      appointments,
    };
  });

  return (
    <div
      class="drac-box drac-d-flex"
      style="flex-direction: column; align-items: center;"
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
              Your email address is: {data.user.email}
              <br />
              Your appointments are:
            </span>
            {data.appointments.documents.map((appointment) => {
              return (
                <span class="drac-text drac-line-height drac-text-white">
                  {appointment.datetime}
                </span>
              );
            })}
          </>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Dashboard',
};
