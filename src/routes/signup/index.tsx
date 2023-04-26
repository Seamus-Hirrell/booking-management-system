import { component$, $, useContext } from '@builder.io/qwik';
import type { QwikSubmitEvent } from '@builder.io/qwik';

import { useNavigate } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';

import { ID } from 'appwrite';

import { account } from '~/api';
import { isLoggedInContext } from '~/root';
import {
  formContainerStyle,
  formStyle,
  inputStyle,
  labelStyle,
} from '~/styles/form_styles.css';

export default component$(() => {
  const nav = useNavigate();
  const isLoggedIn = useContext(isLoggedInContext);
  const registerUser = $((email: string, password: string, name: string) => {
    account.create(ID.unique(), email, password, name).then(
      (response) => {
        console.log(response);
        isLoggedIn.value = false;
        alert('Account created successfully!');
        nav('/login/');
      },
      (error) => {
        console.log(error);
        alert('Invalid email or password');
      }
    );
  });

  const handleSubmit = $((event: QwikSubmitEvent<HTMLFormElement>) => {
    const form = event.target as HTMLFormElement;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const email = form.email.value;
    const name = form.fullName.value;

    registerUser(email, password, name);
  });

  return (
    <div class={formContainerStyle}>
      <h2 class="drac-heading drac-heading-xl drac-text-white">
        Create Account
      </h2>
      <form preventdefault:submit onSubmit$={handleSubmit} class={formStyle}>
        <label for="fullName" class={labelStyle}>
          Name
        </label>
        <input
          name="fullName"
          type="text"
          placeholder="name"
          required
          class={inputStyle}
        />

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
          name="password"
          placeholder="password"
          type="password"
          class={inputStyle}
          required
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        />

        <label for="confirmPassword" class={labelStyle}>
          Confirm Password
        </label>
        <input
          name="confirmPassword"
          placeholder="password"
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
          Create Account
        </button>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Create an account',
};
