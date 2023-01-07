import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { loginUser, getUser } from '~/api';

export const handleSubmit = $((event: Event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const email = form.email.value;
  const password = form.password.value;
  loginUser(email, password);
});

export default component$(() => {
  return (
    <div
      class="drac-box drac-d-flex"
      style="flex-direction: column; align-items: center;"
    >
      <span class="drac-text drac-line-height drac-text-white">Log In</span>
      <form
        preventDefault:submit
        onSubmit$={handleSubmit}
        class="drac-box drac-d-flex"
        style="flex-direction: column; gap: 10px;"
      >
        <label
          htmlFor="email"
          class="drac-text drac-line-height drac-text-white"
        >
          Email
        </label>
        <input
          placeholder="email"
          name="email"
          class="drac-input drac-input-green drac-text-green drac-input-outline"
        />
        <label
          htmlFor="password"
          class="drac-text drac-line-height drac-text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          class="drac-input drac-input-green drac-text-green drac-input-outline"
        />
        <button type="submit" class="drac-btn drac-bg-white">
          Log In
        </button>
      </form>
      <button
        onClick$={() => {
          console.log(getUser());
        }}
      >
        list user info
      </button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Log In',
};
