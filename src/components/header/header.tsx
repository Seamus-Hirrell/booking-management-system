import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();

  return (
    <header
      class="drac-box drac-bg-black drac-d-flex drac-p-sm"
      style="justify-content: space-between"
    >
      <h1 class="drac-heading drac-heading-2xl drac-py-sm drac-text-white">
        Booking Management System
      </h1>
      <ul class="drac-tabs drac-tabs-green">
        <li
          class={{
            'drac-tab': true,
            'drac-tab-active': loc.url.pathname === '/',
          }}
        >
          <Link class="drac-tab-link drac-text" href="/">
            Home
          </Link>
        </li>
        <li
          class={{
            'drac-tab': true,
            'drac-tab-active': loc.url.pathname === '/login/',
          }}
        >
          <Link class="drac-tab-link drac-text" href="/login">
            Log In
          </Link>
        </li>
        <li
          class={{
            'drac-tab': true,
            'drac-tab-active': loc.url.pathname === '/signup/',
          }}
        >
          <Link class="drac-tab-link drac-text" href="/signup">
            Sign Up
          </Link>
        </li>
        <li
          class={{
            'drac-tab': true,
            'drac-tab-active': loc.url.pathname === '/dashboard/',
          }}
        >
          <Link class="drac-tab-link drac-text" href="/dashboard">
            Dashboard
          </Link>
        </li>
        <li
          class={{
            'drac-tab': true,
            'drac-tab-active': loc.url.pathname === '/about/',
          }}
        >
          <Link class="drac-tab-link drac-text" href="/about">
            About
          </Link>
        </li>
        <li
          class={{
            'drac-tab': true,
            'drac-tab-active': loc.url.pathname === '/create/',
          }}
        >
          <Link class="drac-tab-link drac-text" href="/create">
            Create
          </Link>
        </li>
      </ul>
    </header>
  );
});
