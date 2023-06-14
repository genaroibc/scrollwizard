import { component$, useStore } from '@builder.io/qwik';
import { Preview } from './Preview';
import type { Styles } from '~/types';
import { STYLE_INPUTS } from '~/constants';
import { getScrollbarStyles } from '~/utils/get-scrollbar-styles';
import { CopyToClipboardButton } from './shared/CopyToClipboardButton';

export const Playground = component$(() => {
  const styles = useStore<Styles>(() => ({
    scrollbarThumbColor: {
      value: '#000000'
    },
    scrollbarTrackColor: {
      value: '#ffffff'
    },
    scrollbarWidth: {
      value: '5'
    },
    scrollbarThumbBorderRadius: {
      value: '5'
    },
    scrollbarTrackBorderRadius: {
      value: '5'
    },
    scrollbarTrackActiveColor: {
      value: '#000'
    },
    scrollbarTrackHoverColor: {
      value: '#000'
    },
    scrollbarThumbActiveColor: {
      value: '#000'
    },
    scrollbarThumbHoverColor: {
      value: '#000'
    }
  }));

  return (
    <section class="grid grid-cols-1 md:grid-cols-4 bg-slate-950 p-4 gap-4 rounded-md place-content-center max-w-5xl mx-auto text-white max-h-[30rem]">
      <section class="col-span-full md:col-span-3 overflow-auto rounded-tl-md rounded-bl-md relative">
        <div class="absolute top-4 right-4">
          <CopyToClipboardButton textToCopy={getScrollbarStyles({ styles })} />
        </div>
        <Preview inlineStyles={getScrollbarStyles({ styles })} />
      </section>

      <aside class="col-span-full md:col-span-1 bg-gray-900 overflow-auto p-4 rounded-tr-md rounded-br-md w-full">
        <ul class="flex flex-col gap-4">
          {STYLE_INPUTS.map(({ name, label, type, max, min }) => (
            <li key={name} class="flex gap-2 items-center">
              <input
                onChange$={(event) => (styles[name].value = event.target.value)}
                type={type}
                name={name}
                id={name}
                min={min}
                max={max}
              />
              <label for={name}>{label}</label>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
});
