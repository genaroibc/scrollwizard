export type PropertyName =
  | 'scrollbarTrackColor'
  | 'scrollbarThumbColor'
  | 'scrollbarWidth'
  | 'scrollbarBorderRadius';

export type CSSVar =
  | '--scrollbar-track-color'
  | '--scrollbar-thumb-color'
  | '--scrollbar-width'
  | '--scrollbar-border-radius';

export type Styles = {
  [key in PropertyName]: {
    cssVar: CSSVar;
    value: string;
  };
};

export type PropertyInput = {
  name: PropertyName;
  label: string;
  type: 'color' | 'range';
  max?: number;
  min?: number;
};
