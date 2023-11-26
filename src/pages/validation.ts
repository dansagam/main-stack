import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const filterSchema = yup.object({
  dateRange: yup
    .array()
    .of(yup.date().required('Date is required').nullable())
    .required('Date is not required')
    .min(2)
    .max(2),
  type: yup.string().required('Transaction Type is required'),
  status: yup.string().required('Transaction Status is required'),
});

type FilterPayload = yup.InferType<typeof filterSchema>;

export const filterDefaultValue: FilterPayload = {
  dateRange: [null, null],
  type: '',
  status: '',
};

export const filterResolver = yupResolver(filterSchema);
