import { IChildren } from '@/@types/base';
import { Box, Button, Text } from '@mantine/core';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: any }) {
  return (
    <Box role="alert" className=" shadow-lg px-3 py-4">
      <Text className=" text-error-100">Something went wrong:</Text>
      <pre>{error.message}</pre>
      <Box className=" break-words">{JSON.stringify(error.stack)}</Box>
      <Button color="red" variant="contained" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </Box>
  );
}

const myErrorHandler = (error: Error, info: React.ErrorInfo) => {
  // eslint-disable-next-line no-console
  console.log({ error, info: info.componentStack });
};

const AppErrorBoundary = ({ children }: IChildren) => (
  <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
    {children}
  </ErrorBoundary>
);

export default AppErrorBoundary;
