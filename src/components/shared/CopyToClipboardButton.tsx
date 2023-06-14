import { $, component$, useSignal } from '@builder.io/qwik';
import { IconCopy } from './IconCopy';
import { IconCopied } from './IconCopied';

type Props = {
  textToCopy: string;
};

export const CopyToClipboardButton = component$(({ textToCopy }: Props) => {
  const isCopied = useSignal(false);

  const handleCopyClick = $(() => {
    navigator.clipboard.writeText(textToCopy);
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 3000);
  });

  return (
    <button
      class={`px-4 py-2 rounded-lg ${
        isCopied.value ? 'bg-green-500' : 'bg-blue-500'
      } text-white`}
      onClick$={handleCopyClick}
    >
      {isCopied.value ? <IconCopied /> : <IconCopy />}
    </button>
  );
});
