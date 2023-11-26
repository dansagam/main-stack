export const formatCurrency = (currency: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(currency);

export const formatNumber = (val: any, dp: number) => {
  const formatter = new Intl.NumberFormat('ng-NG', {
    style: 'decimal',
    maximumFractionDigits: dp,
    minimumFractionDigits: dp,
  });
  //   return formatter.format(val);
  // eslint-disable-next-line no-restricted-globals
  return isNaN(parseFloat(formatter.format(val))) ? '-' : formatter.format(val);
};
