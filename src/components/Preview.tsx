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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem odio
        nemo minima molestiae maiores ipsum deleniti consequatur exercitationem
        aperiam voluptatum provident, aliquam rem reiciendis, ut cumque incidunt
        eius quibusdam. Ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem odio
        nemo minima molestiae maiores ipsum deleniti consequatur exercitationem
        aperiam voluptatum provident, aliquam rem reiciendis, ut cumque incidunt
        eius quibusdam. Ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem odio
        nemo minima molestiae maiores ipsum deleniti consequatur exercitationem
        aperiam voluptatum provident, aliquam rem reiciendis, ut cumque incidunt
        eius quibusdam. Ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem odio
        nemo minima molestiae maiores ipsum deleniti consequatur exercitationem
        aperiam voluptatum provident, aliquam rem reiciendis, ut cumque incidunt
        eius quibusdam. Ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem odio
        nemo minima molestiae maiores ipsum deleniti consequatur exercitationem
        aperiam voluptatum provident, aliquam rem reiciendis, ut cumque incidunt
        eius quibusdam. Ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem odio
        nemo minima molestiae maiores ipsum deleniti consequatur exercitationem
        aperiam voluptatum provident, aliquam rem reiciendis, ut cumque incidunt
        eius quibusdam. Ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem odio
        nemo minima molestiae maiores ipsum deleniti consequatur exercitationem
        aperiam voluptatum provident, aliquam rem reiciendis, ut cumque incidunt
        eius quibusdam. Ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem odio
        nemo minima molestiae maiores ipsum deleniti consequatur exercitationem
        aperiam voluptatum provident, aliquam rem reiciendis, ut cumque incidunt
        eius quibusdam. Ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem odio
        nemo minima molestiae maiores ipsum deleniti consequatur exercitationem
        aperiam voluptatum provident, aliquam rem reiciendis, ut cumque incidunt
        eius quibusdam. Ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem odio
        nemo minima molestiae maiores ipsum deleniti consequatur exercitationem
        aperiam voluptatum provident, aliquam rem reiciendis, ut cumque incidunt
        eius quibusdam. Ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem odio
        nemo minima molestiae maiores ipsum deleniti consequatur exercitationem
        aperiam voluptatum provident, aliquam rem reiciendis, ut cumque incidunt
        eius quibusdam. Ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem odio
        nemo minima molestiae maiores ipsum deleniti consequatur exercitationem
        aperiam voluptatum provident, aliquam rem reiciendis, ut cumque incidunt
        eius quibusdam. Ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem odio
        nemo minima molestiae maiores ipsum deleniti consequatur exercitationem
        aperiam voluptatum provident, aliquam rem reiciendis, ut cumque incidunt
        eius quibusdam. Ea.
      </p>
    </article>
  );
});
