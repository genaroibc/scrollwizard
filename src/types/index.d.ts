export type PropertyName =
  | 'scrollbarTrackColor'
  | 'scrollbarThumbColor'
  | 'scrollbarWidth'
  | 'scrollbarBorderRadius';

export type Styles = {
  [key in PropertyName]: {
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
