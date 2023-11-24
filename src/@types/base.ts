/* eslint-disable no-unused-vars */
import React from 'react';
import { Control, FieldErrorsImpl, FieldValues, Path, RegisterOptions } from 'react-hook-form';

export type IChildren = {
  children: React.ReactNode;
};

export type BaseSvgType = React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;

export type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};

export type EmptyObject = {
  [K in string | number | symbol]: never;
};

/**
 * contains the @param {value} for the value
 * @params {label} for the display or preview
 */
export type OptionType = {
  label: string;
  value: string;
  content?: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
  showChangeIndicator?: boolean;
  changeIndicatorType?: 'error' | 'info' | 'normal';
  data?: any;
};

export type BaseApiSuccess = {
  success: boolean;
  message: string;
};

export type ReactTag = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;

export type PropsOf<TTag extends ReactTag> = TTag extends React.ElementType
  ? Prettify<Omit<React.ComponentProps<TTag>, 'ref'>>
  : never;

export type Timeout = ReturnType<typeof setTimeout>;

export interface BaseResponseError {
  message: string;
  field: string;
}

export interface BaseApiDataResponse<T> extends BaseApiSuccess {
  data: T;
  error?: BaseResponseError[];
}

export interface BaseApiDataTableResponse<T> extends BaseApiSuccess {
  data: T[];
}

export type BaseApiPayloadDto<T> = {
  payload: T;
};

export type BaseApiParams<T> = {
  params: T;
};

export interface BaseControlledParameter<TFieldValues extends FieldValues> {
  /**
   *
   * it is equivalent to the controller error validation for the helperText
   */
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
  /**
   *
   * it is equivalent to the validation rule of Yup and Zod
   */
  control: Control<TFieldValues, any>;
  /**
   *
   * if `true` & @param {name} for the component name attribute
   */
  name: Path<TFieldValues>;
  /**
   *
   * it is equivalent to the validation rule of Yup and Zod
   */
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}
