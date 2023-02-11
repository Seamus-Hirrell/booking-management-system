import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { type DocumentHead, Link } from '@builder.io/qwik-city';
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
              Welcome {data.user.email}
            </span>
            <form>
              <label class="drac-text drac-text-white">Date</label>
              <input type="date" />
              <label class="drac-text drac-text-white">Time</label>
              <input type="time" />
              <button class="drac-btn drac-bg-purple">
                Create Appointment
              </button>
            </form>
            <Link class="drac-btn drac-bg-purple" href="/dashboard">
              Go Back
            </Link>
          </>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Create Appointment',
};
