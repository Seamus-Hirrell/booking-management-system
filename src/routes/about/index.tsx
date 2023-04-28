import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import {
  divStyle,
  dividerStyle,
  spanStyle,
  verticalDividerStyle,
} from '~/styles/general_styles.css';
import { contactContainerStyle, contactStyle } from './styles.css';

import logo from '~/images/logo.jpg';

export default component$(() => {
  return (
    <div class={divStyle}>
      <img
        src={logo}
        alt="The logo for Carndonagh Health Centre"
        class="drac-w-8xl"
      />
      <h2 class="drac-heading drac-heading-xl drac-text-white">
        Please see below for contact details for Carndonagh Health Centre
      </h2>
      <div class={dividerStyle} />
      <div class={contactContainerStyle}>
        <div class={contactStyle}>
          <h3 class="drac-heading drac-heading-lg drac-text-white">Contact</h3>

          <h4 class="drac-heading drac-heading drac-text-white">Call:</h4>
          <span class={spanStyle}>074 937 4236</span>

          <h4 class="drac-heading drac-heading drac-text-white">Email:</h4>
          <span class={spanStyle}>reception@carndonaghhealthcentre.ie</span>
        </div>
        <div class={verticalDividerStyle} />
        <div class={contactStyle}>
          <h3 class="drac-heading drac-heading-lg drac-text-white">
            Opening Hours
          </h3>
          <h4 class="drac-heading drac-heading drac-text-white">
            Monday - Friday:
          </h4>
          <span class={spanStyle}>9AM - 5PM</span>
        </div>
      </div>
      <div class={dividerStyle} />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'About',
};