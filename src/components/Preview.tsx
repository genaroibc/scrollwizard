import { component$ } from '@builder.io/qwik';

type Props = {
  inlineStyles: string;
};

export const Preview = component$<Props>(({ inlineStyles }) => {
  return (
    <article class="h-full overflow-scroll text-white bg-slate-800 p-4">
      <style>{inlineStyles}</style>
      <code>
        <pre>{inlineStyles}</pre>
      </code>
    </article>
  );
});
