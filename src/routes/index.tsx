import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { registerUser } from '~/api';

export default component$(() => {
  return (
    <div class="drac-box">
      <span class="drac-text drac-line-height drac-text-white drac-p-sm">
        The quick vampire jumps over the lazy human
      </span>

      <button
        class="drac-btn drac-bg-green"
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
