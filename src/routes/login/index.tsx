import { component$, $, useContext } from '@builder.io/qwik';
import type { QwikSubmitEvent } from '@builder.io/qwik';

import { useNavigate } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';

import { account, teams } from '~/api';
import { isAdminContext, isLoggedInContext } from '~/root';

import {
  formContainerStyle,
  formStyle,
  inputStyle,
  labelStyle,
} from '~/styles/form_styles.css';

export default component$(() => {
  const isLoggedIn = useContext(isLoggedInContext);
  const isAdmin = useContext(isAdminContext);

  const nav = useNavigate();
  const loginUser = $((email: string, password: string) => {
    account.createEmailSession(email, password).then(
      (response) => {
        console.log('logged in', response);
        isLoggedIn.value = true;

        teams.listMemberships('63ec03ceab377335c31b').then(
          (response) => {
            console.log('list of memberships of admin team', response);
            isAdmin.value = true;
            nav('/admin');
          },
          (error) => {
            console.log('user is not an admin', error);
            nav('/dashboard');
          }
        );
      },
      (error) => {
        console.log('error when trying to log in', error);
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
    <div class={formContainerStyle}>
      <h2 class="drac-heading drac-heading-xl drac-text-white">Log In</h2>
      <form preventdefault:submit onSubmit$={handleSubmit} class={formStyle}>
        <label for="email" class={labelStyle}>
          Email
        </label>
        <input
          placeholder="email"
          name="email"
          type="email"
          class={inputStyle}
          required
        />
        <label for="password" class={labelStyle}>
          Password
        </label>
        <input
          placeholder="password"
          name="password"
          type="password"
          class={inputStyle}
          required
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        />
        <span class="drac-text drac-text-white drac-line-height">
          Password must be at least 8 characters long and contain at least one
          lowercase letter, one uppercase letter, one numeric digit, and one
          special character.
        </span>
        <button type="submit" class="drac-btn drac-bg-white drac-mt-sm">
          Log In
        </button>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Log In',
};
