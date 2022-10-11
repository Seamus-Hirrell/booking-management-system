import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { registerUser } from '~/api';
import styles from './index.css';

export const handleSubmit$ = (event: Event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const email = form.email.value;
  const password = form.password.value;
  const name = form.name2.value;
  registerUser(email, password, name);
};

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div>
      <h3>Create an Account</h3>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
      <form preventDefault:submit onSubmit$={handleSubmit$}>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <label>
          Confirm Password
          <input type="password" name="confirmPassword" />
        </label>
        <label>
          Name
          <input type="text" name="name2" />
        </label>
        <button type="submit">click me</button>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Create an account',
};