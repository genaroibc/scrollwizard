import { component$ } from '@builder.io/qwik';
import type { Styles } from '~/types';

type Props = {
  styles: Styles;
};

export const Preview = component$<Props>(({ styles }) => {
  return (
    <article
      style={Object.values(styles).reduce(
        (finalStyle, { cssVar, value }) => finalStyle + `${cssVar}:${value};`,
        ''
      )}
      id="scrollbar-preview"
      class="h-full overflow-auto text-white bg-slate-800 p-4"
    >
      <code>
        <pre>{JSON.stringify(styles, null, 2)}</pre>
      </code>
    </article>
  );
});
