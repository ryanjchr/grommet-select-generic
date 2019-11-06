import { DropProps } from 'grommet';
import {
  A11yTitleType,
  AlignSelfType,
  GridAreaType,
  MarginType,
  PlaceHolderType,
} from 'grommet/utils';

declare module 'grommet' {
  interface SelectProps<
    T extends string | boolean | number | JSX.Element | object
  > {
    a11yTitle?: A11yTitleType;
    alignSelf?: AlignSelfType;
    gridArea?: GridAreaType;
    children?: (...args: any[]) => any;
    closeOnChange?: boolean;
    disabled?: boolean | (number | string | object)[];
    disabledKey?: string | ((value: T) => any);
    dropAlign?: {
      top?: 'top' | 'bottom';
      bottom?: 'top' | 'bottom';
      right?: 'left' | 'right';
      left?: 'left' | 'right';
    };
    dropHeight?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | string;
    dropTarget?: object;
    dropProps?: DropProps;
    focusIndicator?: boolean;
    icon?: boolean | ((...args: any[]) => any) | React.ReactNode;
    id?: string;
    labelKey?: string | ((value: T) => any);
    margin?: MarginType;
    messages?: { multiple?: string };
    multiple?: boolean;
    name?: string;
    onChange?: (event: { option: T; value: T[]; selected: number[] }) => void;
    onClose?: (...args: any[]) => any;
    onMore?: (...args: any[]) => any;
    onOpen?: (...args: any[]) => any;
    onSearch?: (...args: any[]) => any;
    options: T[];
    open?: boolean;
    placeholder?: PlaceHolderType;
    plain?: boolean;
    replace?: boolean;
    searchPlaceholder?: string;
    selected?: number | number[];
    size?: 'small' | 'medium' | 'large' | 'xlarge' | string;
    value?: string | JSX.Element | object | (string | object)[];
    valueLabel?: React.ReactNode;
    valueKey?: string | ((value: T) => any);
    emptySearchMessage?: string;
  }

  class Select<
    T extends string | boolean | number | JSX.Element | object
  > extends React.Component<SelectProps<T>> {}
}
