import { addDays } from 'date-fns';

export const STATIC_DATE_RANGE = [
  {
    label: 'Last 7 days',
    range: () => ({
      endDate: new Date(),
      startDate: addDays(new Date(), -7),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: 'Last 14 days',
    range: () => ({
      startDate: addDays(new Date(), -14),
      endDate: new Date(),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: 'Last 30 days',
    range: () => ({
      startDate: addDays(new Date(), -30),
      endDate: new Date(),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: 'Last 3 months',
    range: () => ({
      startDate: addDays(new Date(), -90),
      endDate: new Date(),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: 'Last 12 months',
    range: () => ({
      startDate: addDays(new Date(), -365),
      endDate: new Date(),
    }),
    isSelected() {
      return true;
    },
  },
];

export const DATE_TAB_OPTIONS = [
  {
    label: 'Today',
    value: '0',
  },
  {
    label: 'Last 7 days',
    value: '1',
  },
  {
    label: 'This month',
    value: '2',
  },
  {
    label: 'Last 3 months',
    value: '3',
  },
];
