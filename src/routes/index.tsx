import NotFound from '@/layouts/NotFound';
import HomeLayout from '@/layouts/home-layout/HomeLayout';
import FallbackLoader from '@/layouts/loader/FallbackLoader';
import HomePage from '@/pages/home/Home.page';
import AppErrorBoundary from '@/shared/error-boundary/ErrorBoundary';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <React.Suspense fallback={<FallbackLoader />}>
        <HomeLayout>
          <AppErrorBoundary>
            <HomePage />
          </AppErrorBoundary>
        </HomeLayout>
      </React.Suspense>
    ),
  },
  { path: '*', element: <NotFound /> },
]);
