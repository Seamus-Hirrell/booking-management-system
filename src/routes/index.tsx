import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css';

import { registerUser } from '~/api';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div>
      <p>this is the body of the main page</p>
      <button
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
