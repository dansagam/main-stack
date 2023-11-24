import '@mantine/core/styles.css';
import ThemeProvider from './themes';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
