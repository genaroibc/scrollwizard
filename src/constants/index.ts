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
    name: 'scrollbarThumbBorderRadius',
    label: 'thumb border radius',
    type: 'range',
    max: 15,
    min: 0
  },
  {
    name: 'scrollbarTrackBorderRadius',
    label: 'track border radius',
    type: 'range',
    max: 15,
    min: 0
  },
  {
    name: 'scrollbarTrackHoverColor',
    label: 'track hover color',
    type: 'color'
  },
  {
    name: 'scrollbarTrackActiveColor',
    label: 'track active color',
    type: 'color'
  },
  {
    name: 'scrollbarThumbHoverColor',
    label: 'thumb hover color',
    type: 'color'
  },
  {
    name: 'scrollbarThumbActiveColor',
    label: 'thumb active color',
    type: 'color'
  }
];
