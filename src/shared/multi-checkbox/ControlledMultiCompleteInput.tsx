import React from 'react';
import MultiCompleteInput from './MultiCompleteInput';
import { Controller, FieldValues } from 'react-hook-form';
import { BaseControlledParameter } from '@/@types/base';

type OmiMultiCompleteInputProp = Omit<
  React.ComponentProps<typeof MultiCompleteInput>,
  'name' | 'error' | 'value' | 'onChange' | 'onBlur' | 'ref'
> & {
  subText?: string;
};
export interface ControlledMultiCompleteInputProps<TFieldValues extends FieldValues>
  extends OmiMultiCompleteInputProp,
    BaseControlledParameter<TFieldValues> {
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: any) => void;
}

function ControlledMultiCompleteInput<TFieldValues extends FieldValues>(
  props: ControlledMultiCompleteInputProps<TFieldValues>
) {
  const { control, name, options, rules, ...rest } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={() => <MultiCompleteInput options={options} {...rest} />}
    />
  );
}

export default ControlledMultiCompleteInput;
