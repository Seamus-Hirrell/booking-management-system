import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <main>
      <Header />
      <section class="drac-p-sm">
        <Slot />
      </section>
    </main>
  );
});
