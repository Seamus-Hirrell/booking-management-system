import { component$, useStore, useTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useNavigate } from '@builder.io/qwik-city';

import { account } from '~/api';

export default component$(() => {
  const nav = useNavigate();

  useTask$(async () => {
    try {
      const userData = await account.get();
      console.log('userData', userData);
      nav.path = '/signup';
    } catch (e) {
      console.log('e', e);
    }
  });

  return (
    <div class="drac-box">
      <span class="drac-text drac-line-height drac-text-white drac-p-sm">
        The quick vampire jumps over the lazy human
      </span>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
