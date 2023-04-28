import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { divStyle, spanStyle } from '~/styles/general_styles.css';
import photo from '~/images/photo.png';

export default component$(() => {
  return (
    <div class={divStyle}>
      <h2 class="drac-heading drac-heading-xl drac-text-white">
        Welcome to the Booking Management System for Carndonagh Health Centre
      </h2>
      <img
        src={photo}
        alt="A photograph of the outside of Carndonagh Health Centre"
        class="drac-h-md"
      />
      <span class={spanStyle}>
        Click on the links in the top-right to navigate to the different
        sections of the website.
      </span>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Booking Management System for Carndonagh Health Centre',
};
