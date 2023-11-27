import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import ThemeProvider from './themes';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import UserContextProvider from './context/UserContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
