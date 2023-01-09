import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { DocumentHead, useNavigate } from '@builder.io/qwik-city';

import { account } from '~/api';

export default component$(() => {
  const nav = useNavigate();

  const userData = useResource$(() => {
    return account.get();
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
          <span class="drac-text drac-line-height drac-text-white">
            Your email address is: {data.email}
          </span>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Dashboard',
};
