import {
  component$,
  createContextId,
  useContextProvider,
  useSignal,
} from '@builder.io/qwik';
import type { Signal } from '@builder.io/qwik';

import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';

import { RouterHead } from './components/router-head/router-head';
import 'dracula-ui/styles/dracula-ui.css';

export const isLoggedInContext = createContextId<Signal<boolean>>('isLoggedIn');
export const isAdminContext = createContextId<Signal<boolean>>('isAdmin');

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  const isLoggedIn = useSignal(false);
  useContextProvider(isLoggedInContext, isLoggedIn);

  const isAdmin = useSignal(false);
  useContextProvider(isAdminContext, isAdmin);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en" class="drac-bg-black drac-m-none">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
