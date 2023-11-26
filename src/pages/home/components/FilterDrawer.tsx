import React from 'react';
// import classes from './filter.module.css';
import { Prettify } from '@/@types/base';
import { Drawer } from '@/shared';
import { useForm } from 'react-hook-form';
import { Box, rem } from '@mantine/core';
import ControlledDateRange from '@/shared/datepicker/ControlledDateRange';
import ControlledMultiCompleteInput from '@/shared/multi-checkbox/ControlledMultiCompleteInput';
import { TRANSACTION_STATUS, TRANSACTION_TYPE } from '@/utils/appenum';

type Props = Prettify<
  Pick<React.ComponentProps<typeof Drawer>, 'onClose'> & {
    open: boolean;
    onAction: () => void;
  }
>;

function FilterDrawer(props: Props) {
  const { onAction, onClose, open } = props;
  const { control } = useForm();
  return (
    <Drawer onAction={onAction} onClose={onClose} open={open} title="Filter ">
      <Box style={{ gap: rem(12), display: 'grid' }}>
        <ControlledDateRange control={control} name="dd" label="Date Range" />
        <ControlledMultiCompleteInput
          control={control}
          name="dd"
          label="Transaction Type"
          options={TRANSACTION_TYPE}
        />
        <ControlledMultiCompleteInput
          control={control}
          name="dd"
          label="Transaction Status"
          options={TRANSACTION_STATUS}
        />
      </Box>
    </Drawer>
  );
}

export default FilterDrawer;
