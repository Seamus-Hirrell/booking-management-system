import { component$, $ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import { registerUser } from '~/api';
import { boxStyle } from './styles.css';

export const handleSubmit = $((event: Event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const email = form.email.value;
  const password = form.password.value;
  const name = form.name2.value;
  registerUser(email, password, name);
});

export default component$(() => {
  return (
    <div class={boxStyle}>
      <h2 class="drac-heading drac-heading-xl drac-text-white">
        Create Account
      </h2>
      <form preventdefault:submit onSubmit$={handleSubmit} class={boxStyle}>
        <label for="email" class="drac-text drac-line-height drac-text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          class="drac-input drac-input-green drac-text-green drac-input-outline"
        />

        <label
          for="password"
          class="drac-text drac-line-height drac-text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          class="drac-input drac-input-green drac-text-green drac-input-outline"
        />

        <label
          for="confirmPassword"
          class="drac-text drac-line-height drac-text-white"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          class="drac-input drac-input-green drac-text-green drac-input-outline"
        />

        <label
          for="fullName"
          class="drac-text drac-line-height drac-text-white"
        >
          Name
        </label>
        <input
          type="text"
          name="fullName"
          class="drac-input drac-input-green drac-text-green drac-input-outline"
        />

        <button type="submit" class="drac-btn drac-bg-white">
          Submit
        </button>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Create an account',
};
