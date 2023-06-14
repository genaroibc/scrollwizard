import type { Styles } from '~/types';

type Props = {
  styles: Styles;
};

export function getScrollbarStyles({ styles }: Props) {
  return `
* {
  scrollbar-color: ${styles.scrollbarThumbColor.value} ${styles.scrollbarTrackColor.value};
}

*::-webkit-scrollbar {
  width: ${styles.scrollbarWidth.value}px;
  height: ${styles.scrollbarWidth.value}px;
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
}`;
}
