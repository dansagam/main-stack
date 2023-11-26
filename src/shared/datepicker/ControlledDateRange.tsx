import React from 'react';
import DateRangePicker from './DateRangePicker';
import { BaseControlledParameter } from '@/@types/base';
import { Controller, FieldValues } from 'react-hook-form';

type OmitDateRangeProps = Omit<
  React.ComponentPropsWithoutRef<typeof DateRangePicker>,
  'name' | 'error' | 'value' | 'onChange' | 'onBlur' | 'ref'
>;

export interface ControlledDateRangeProps<TFieldValues extends FieldValues>
  extends OmitDateRangeProps,
    BaseControlledParameter<TFieldValues> {
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: any) => void;
}

function ControlledDateRange<TFieldValues extends FieldValues>(
  props: ControlledDateRangeProps<TFieldValues>
) {
  const { control, rules, name, ...rest } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { ref, onChange, ...fields } }) => (
        <DateRangePicker ref={ref} onChange={onChange} {...rest} {...fields} />
      )}
    />
  );
}

export default ControlledDateRange;
