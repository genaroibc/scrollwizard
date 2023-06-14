import type { Styles } from '~/types';

type Props = {
  styles: Styles;
};

export function getScrollbarStyles({ styles }: Props) {
  return `* {
  scrollbar-color: ${styles.scrollbarThumbColor.value} ${styles.scrollbarTrackColor.value};
}

*::-webkit-scrollbar {
  width: ${styles.scrollbarWidth.value}px;
  height: ${styles.scrollbarWidth.value}px;
}
*::-webkit-scrollbar-track {
  border-radius: ${styles.scrollbarTrackBorderRadius.value}px;
  background-color: ${styles.scrollbarTrackColor.value};
}

*::-webkit-scrollbar-track:hover {
  background-color: ${styles.scrollbarTrackHoverColor.value};
}

*::-webkit-scrollbar-track:active {
  background-color: ${styles.scrollbarTrackActiveColor.value};
}

*::-webkit-scrollbar-thumb {
  border-radius: ${styles.scrollbarThumbBorderRadius.value}px;
  background-color: ${styles.scrollbarThumbColor.value};
}

*::-webkit-scrollbar-thumb:hover {
  background-color: ${styles.scrollbarThumbHoverColor.value};
}

*::-webkit-scrollbar-thumb:active {
  background-color: ${styles.scrollbarThumbActiveColor.value};
}`;
}
