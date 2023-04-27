import { component$, useContext } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

import { isAdminContext, isLoggedInContext } from '~/root';

export default component$(() => {
  const loc = useLocation();
  const isLoggedIn = useContext(isLoggedInContext);
  const isAdmin = useContext(isAdminContext);

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
            'drac-tab-active': loc.url.pathname === '/about/',
          }}
        >
          <Link class="drac-tab-link drac-text" href="/about">
            About
          </Link>
        </li>

        {!isLoggedIn.value && (
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
        )}

        {!isLoggedIn.value && (
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
        )}

        {isLoggedIn.value && !isAdmin.value && (
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
        )}

        {isLoggedIn.value && !isAdmin.value && (
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
        )}

        {isAdmin.value && (
          <li
            class={{
              'drac-tab': true,
              'drac-tab-active': loc.url.pathname === '/admin/',
            }}
          >
            <Link class="drac-tab-link drac-text" href="/admin">
              Admin
            </Link>
          </li>
        )}

        {isLoggedIn.value && (
          <li
            class={{
              'drac-tab': true,
              'drac-tab-active': loc.url.pathname === '/logout/',
            }}
          >
            <Link class="drac-tab-link drac-text" href="/logout">
              Log Out
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
});
