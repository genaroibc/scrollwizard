import { component$, useStore } from '@builder.io/qwik';
import { Preview } from './Preview';
import type { Styles } from '~/types';
import { STYLE_INPUTS } from '~/constants';

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
    scrollbarBorderRadius: {
      value: '5'
    }
  }));

  return (
    <section class="grid grid-cols-4 bg-slate-950 p-4 gap-4 rounded-3xl place-content-center max-w-5xl mx-auto text-white max-h-96">
      <section class="col-span-3 overflow-hidden p-4 rounded-tl-3xl rounded-bl-3xl">
        <Preview
          inlineStyles={`
* {
  scrollbar-width: ${styles.scrollbarWidth.value}px;
  scrollbar-color: ${styles.scrollbarThumbColor.value} ${styles.scrollbarTrackColor.value};
}

*::-webkit-scrollbar {
  width: ${styles.scrollbarWidth.value}px;
  width: ${styles.scrollbarWidth.value}px;
}
*::-webkit-scrollbar-track {
  border-radius: ${styles.scrollbarBorderRadius.value}px;
  background-color: ${styles.scrollbarTrackColor.value};
}

*::-webkit-scrollbar-track:hover {
  background-color: #4D0BC2;
}

*::-webkit-scrollbar-track:active {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-thumb {
  border-radius: ${styles.scrollbarBorderRadius.value}px;
  background-color: ${styles.scrollbarThumbColor.value};
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #62A34B;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #62A34B;
}`}
        />
      </section>

      <aside class="col-span-1 bg-gray-900 overflow-hidden p-4 rounded-tr-3xl rounded-br-3xl">
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
