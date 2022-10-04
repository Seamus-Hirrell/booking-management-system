import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <h1>Booking Management System</h1>
      <ul>
        <li>
          <a>item one</a>
        </li>
        <li>
          <a>item one</a>
        </li>
        <li>
          <a>item one</a>
        </li>
      </ul>
    </header>
  );
});
