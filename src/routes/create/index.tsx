import { component$, Resource, useResource$, $ } from '@builder.io/qwik';
import { type DocumentHead, Link } from '@builder.io/qwik-city';

import { ID, Query } from 'appwrite';
import { account, databases } from '~/api';

import { formStyle } from './styles.css';

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

  const handleSubmit = $(async (event: Event) => {
    const form = event.target as HTMLFormElement;
    const date = form.date.value;
    const time = form.time.value;
    console.log(date, time);

    const userid = (await userData.value).user.$id;

    // combine date and time
    const datetime = new Date(`${date}T${time}`);

    databases.createDocument(
      '63bdf02eddbf72fa2abe',
      '63bdf0455a708734ce9b',
      ID.unique(),
      {
        datetime,
        userid,
      }
    );
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
            <form
              class={formStyle}
              preventdefault:submit
              onSubmit$={handleSubmit}
            >
              <label for="date" class="drac-text drac-text-white">
                Date
              </label>
              <input
                type="date"
                name="date"
                class="drac-input drac-input-green drac-text-white"
              />
              <label for="time" class="drac-text drac-text-white">
                Time
              </label>
              <input
                type="time"
                name="time"
                class="drac-input drac-input-green drac-text-white"
              />
              <button class="drac-btn drac-bg-purple" type="submit">
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
