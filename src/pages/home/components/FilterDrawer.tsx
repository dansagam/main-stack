import React from 'react';
import classes from './filter.module.css';
import { Prettify } from '@/@types/base';
import { Drawer } from '@/shared';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, rem } from '@mantine/core';
import ControlledDateRange from '@/shared/datepicker/ControlledDateRange';
import ControlledMultiCompleteInput from '@/shared/multi-checkbox/ControlledMultiCompleteInput';
import { TRANSACTION_STATUS, TRANSACTION_TYPE } from '@/utils/appenum';
import { filterDefaultValue, filterResolver } from '@/pages/validation';
import isEmpty from 'lodash/isEmpty';
import AppTabs from '@/shared/tabs/AppTabs';
import { subMonths, subDays, addDays } from 'date-fns';
import { DATE_TAB_OPTIONS } from '@/utils/constant';

type Props = Prettify<
  Pick<React.ComponentProps<typeof Drawer>, 'onClose'> & {
    open: boolean;
    onAction: () => void;
  }
>;
const dataObjValue = {
  '0': addDays(new Date(), 1),
  '1': subDays(new Date(), 7),
  '2': subDays(new Date(), 30),
  '3': subMonths(new Date(), 3),
};

function FilterDrawer(props: Props) {
  const { onClose, open } = props;
  const [tabValue, setTabValue] = React.useState<null | keyof typeof dataObjValue>(null);
  const {
    control,
    formState: { isValid, errors },
    reset,
    handleSubmit,
    setValue,
    watch,
  } = useForm({
    defaultValues: filterDefaultValue,
    resolver: filterResolver,
  });

  console.log({ values: watch() });

  const onSubmit: SubmitHandler<typeof filterDefaultValue> = (values) => {
    // eslint-disable-next-line no-console
    console.log({ values });
    onClose();
  };

  React.useEffect(() => {
    if (tabValue) {
      setValue('dateRange', [new Date(), dataObjValue[tabValue] || new Date()]);
    }
  }, [tabValue]);

  return (
    <Drawer
      onAction={handleSubmit(onSubmit)}
      onClose={() => {
        onClose();
        reset();
      }}
      open={open}
      title="Filter "
      actionText="Apply"
      secActionText="Clear"
      ActionButtonProps={{ disabled: !isValid || !isEmpty(errors) }}
    >
      <Box style={{ gap: rem(12), display: 'grid' }}>
        <AppTabs
          options={DATE_TAB_OPTIONS}
          value={tabValue || ''}
          onChange={(values) => {
            setTabValue(values as keyof typeof dataObjValue);
          }}
          variant="outline"
          style={{ flexWrap: 'nowrap' }}
          classNames={{ tab: classes['app-tab-change'], list: classes['app-tab-list'] }}
        />
        <ControlledDateRange control={control} name="dateRange" label="Date Range" />
        <ControlledMultiCompleteInput
          control={control}
          name="type"
          label="Transaction Type"
          options={TRANSACTION_TYPE}
        />
        <ControlledMultiCompleteInput
          control={control}
          name="status"
          label="Transaction Status"
          options={TRANSACTION_STATUS}
        />
      </Box>
    </Drawer>
  );
}

export default FilterDrawer;
