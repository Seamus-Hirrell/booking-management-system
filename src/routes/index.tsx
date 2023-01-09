import { component$, $, useTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="drac-box">
      <span class="drac-heading drac-line-height drac-text-white drac-p-sm">
        Welcome to the Booking Management System
      </span>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
