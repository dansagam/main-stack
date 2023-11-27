import React from 'react';
import Chart, { Props as ChartProps } from 'react-apexcharts';

type LineChartProps = {
  xResults: Array<string | number>;
  yResults: Array<number>;
  width: number | null;
  xAxis?: ChartProps['options'];
};
function LineChart({ xResults, yResults, width, xAxis }: LineChartProps) {
  const series: ChartProps['series'] = [
    {
      name: 'High - 2013',
      data: yResults,
    },
  ];

  const options: ChartProps['options'] = {
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['var(--mantine-color-red-3)'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    title: {
      text: '',
      align: 'left',
    },
    grid: {
      // borderColor: '#e7e7e7',
      borderColor: '#fff',
      row: {
        colors: ['transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: xResults,
      title: {
        text: '',
      },
    },
    yaxis: {
      title: {
        text: '',
      },
      min: -5,
      show: false,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    ...xAxis,
  };
  return (
    <Chart
      height={width && width < 467 ? 350 : '100%'}
      options={options}
      series={series}
      type="line"
    />
  );
}

export default LineChart;
