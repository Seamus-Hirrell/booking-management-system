import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <ul>
        <li>
          <p>item one</p>
        </li>
        <li>
          <p>item one</p>
        </li>
        <li>
          <p>item one</p>
        </li>
      </ul>
    </header>
  );
});
