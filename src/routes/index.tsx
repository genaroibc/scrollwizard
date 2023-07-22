import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Playground } from '~/components/Playground';

export default component$(() => {
  return <Playground />;
});

export const head: DocumentHead = {
  title: 'Scrollbar Wizard - Customize your scrollbar with ease',
  meta: [
    {
      name: 'description',
      content: 'Create your own scrollbar'
    }
  ]
};
