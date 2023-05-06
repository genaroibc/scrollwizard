import type { PropertyInput } from '~/types';

export const STYLE_INPUTS: PropertyInput[] = [
  {
    name: 'scrollbarThumbColor',
    label: 'thumb color',
    type: 'color'
  },
  {
    name: 'scrollbarTrackColor',
    label: 'track color',
    type: 'color'
  },
  {
    name: 'scrollbarWidth',
    label: 'scrollbar width',
    type: 'range',
    max: 30,
    min: 5
  },
  {
    name: 'scrollbarBorderRadius',
    label: 'scrollbar border radius',
    type: 'range',
    max: 15,
    min: 0
  }
];
