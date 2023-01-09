import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <header
      class="drac-box drac-bg-black drac-d-flex drac-p-sm"
      style="justify-content: space-between"
    >
      <h1 class="drac-heading drac-heading-2xl drac-py-sm drac-text-white">
        Booking Management System
      </h1>
      <ul class="drac-tabs drac-tabs-green">
        <li class="drac-tab drac-tab-active">
          <Link class="drac-tab-link drac-text" href="/login">
            Log In
          </Link>
        </li>
        <li class="drac-tab">
          <Link class="drac-tab-link drac-text" href="/signup">
            Sign Up
          </Link>
        </li>
        <li class="drac-tab">
          <Link class="drac-tab-link drac-text" href="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
    </header>
  );
});
