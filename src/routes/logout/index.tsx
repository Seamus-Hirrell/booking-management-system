import { $, component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { account } from '~/api';
import { formContainerStyle } from '~/styles/form_styles.css';

export default component$(() => {
  const logoutUser = $(async () => {
    await account.deleteSessions();
    window.location.href = '/';
  });

  return (
    <div class={formContainerStyle}>
      <span class="drac-text drac-text-white drac-line-height">
        Click below to log out.
      </span>
      <button onClick$={logoutUser} class="drac-btn drac-bg-white drac-mt-sm">
        Log Out
      </button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Log Out',
};
