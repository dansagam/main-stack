import HomeLayout from '@/layouts/home-layout/HomeLayout';
import HomePage from '@/pages/home/Home.page';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HomeLayout>
        <HomePage />
      </HomeLayout>
    ),
  },
]);
