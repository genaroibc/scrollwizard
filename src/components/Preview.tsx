import { component$, useVisibleTask$ } from '@builder.io/qwik';
import hljs from 'highlight.js/lib/common';

type Props = {
  inlineStyles: string;
};

export const Preview = component$<Props>(({ inlineStyles }) => {
  useVisibleTask$(() => {
    hljs.highlightAll();
  });

  return (
    <article class="text-white bg-slate-800">
      <style dangerouslySetInnerHTML={inlineStyles} />
      <pre>
        <code class="language-css p-4 h-full overflow-auto">
          {inlineStyles}
        </code>
      </pre>
    </article>
  );
});
