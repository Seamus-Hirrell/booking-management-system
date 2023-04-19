import { component$, $ } from '@builder.io/qwik';
import type { QwikSubmitEvent } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';

import { account } from '~/api';

export default component$(() => {
  const nav = useNavigate();

  const loginUser = $((email: string, password: string) => {
    account.createEmailSession(email, password).then(
      (response) => {
        console.log(response);
        nav('/dashboard');
      },
      (error) => {
        console.log(error);
        alert('Invalid email or password');
      }
    );
  });

  const handleSubmit = $((event: QwikSubmitEvent<HTMLFormElement>) => {
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password);
  });

  return (
    <div
      class="drac-box drac-d-flex"
      style="flex-direction: column; align-items: center;"
    >
      <span class="drac-text drac-line-height drac-text-white">Log In</span>
      <form
        preventdefault:submit
        onSubmit$={handleSubmit}
        class="drac-box drac-d-flex"
        style="flex-direction: column; gap: 10px;"
      >
        <label for="email" class="drac-text drac-line-height drac-text-white">
          Email
        </label>
        <input
          placeholder="email"
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
        <button type="submit" class="drac-btn drac-bg-white">
          Log In
        </button>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Log In',
};
