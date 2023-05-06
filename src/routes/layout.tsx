import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Footer from '~/components/starter/footer/footer';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString()
  };
});

export default component$(() => {
  return (
    <>
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
