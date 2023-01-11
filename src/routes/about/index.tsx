import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div
      class="drac-box drac-d-flex"
      style="flex-direction: column; align-items: center;"
    >
      <h1 class="drac-heading drac-heading-2xl drac-text-white">About</h1>
      <span class="drac-text drac-line-height drac-text-white">
        This is the about page
      </span>
    </div>
  );
});
