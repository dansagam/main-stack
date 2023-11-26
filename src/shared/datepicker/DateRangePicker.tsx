import { Flex, Stack, TextInput } from '@mantine/core';
import { DatePickerInput, DatesRangeValue } from '@mantine/dates';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import classes from './datarange.module.css';
import { Prettify } from '@/@types/base';
import Dayjs from 'dayjs';

type DatePickerInputProps = Prettify<
  React.ComponentPropsWithRef<typeof DatePickerInput> & {
    label?: string;
    error?: boolean;
    staticRange?: string[];
  }
>;
const DateRangePicker = React.forwardRef<HTMLButtonElement, DatePickerInputProps>((props, ref) => {
  const { label, staticRange, onChange, ...rest } = props;
  const [value, setValue] = React.useState<DatesRangeValue>([null, null]);
  return (
    <Stack style={{ position: 'relative' }} px={0}>
      {staticRange && <div>render static range</div>}
      <Stack style={{ position: 'relative', border: 'none' }}>
        <DatePickerInput
          ref={ref}
          type="range"
          value={value}
          classNames={{ input: classes['date-range'] }}
          onChange={(values) => {
            if (onChange) {
              onChange((Array.isArray(values) ? values : [null, null]) as DatesRangeValue);
            }
            setValue((Array.isArray(values) ? values : [null, null]) as DatesRangeValue);
          }}
          styles={{
            root: { position: 'absolute', width: '100%', height: '100%' },
            wrapper: { height: '100%', width: '100%' },
          }}
          {...rest}
        />
        <Flex align="center" gap={3} w="100%" justify="space-between">
          <TextInput
            id="ff"
            onChange={() => {}}
            label={label}
            data-app-active={`${Boolean(value[0])}`}
            classNames={{
              wrapper: classes['text-input-wrapper'],
              input: classes['text-input-input'],
              root: classes['text-input-root'],
            }}
            value={value[0] ? Dayjs(value[0]).format('DD MMM, YYYY') : ''}
            rightSection={<IoIosArrowDown fontSize={10} />}
          />
          <TextInput
            label="."
            classNames={{
              wrapper: classes['text-input-wrapper'],
              input: classes['text-input-input'],
              root: classes['text-input-root'],
            }}
            data-app-active={`${Boolean(value[1])}`}
            value={value[1] ? Dayjs(value[1]).format('DD MMM, YYYY') : ''}
            rightSection={<IoIosArrowDown fontSize={10} />}
          />
        </Flex>
      </Stack>
    </Stack>
  );
});

DateRangePicker.displayName = 'DateRangePicker';

export default DateRangePicker;
