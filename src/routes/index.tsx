import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Playground } from '~/components/Playground';

export default component$(() => {
  return (
    <main>
      <h1>How to use Qwik</h1>
      <Playground />
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ]
};
