import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { registerUser } from '~/api';

export default component$(() => {
  return (
    <div>
      <p>this is the body of the main page</p>
      <button
        class="drac-btn drac-bg-purple"
        onClick$={() => {
          registerUser('john.doe@gmail.com', 'Testpass1!', 'John Doe');
        }}
      >
        click me
      </button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
