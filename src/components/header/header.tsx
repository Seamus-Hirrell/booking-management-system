import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <h1>Booking Management System</h1>
      <ul>
        <li>item one</li>
        <li>item one</li>
        <li>item one</li>
      </ul>
    </header>
  );
});
