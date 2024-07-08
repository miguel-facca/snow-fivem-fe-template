const { Home } = lazyLoad(() => import('@views/pages/Home'));
const { CreateUser } = lazyLoad(() => import('@views/pages/CreateUser'));

import { routes } from './routes';

import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { lazyLoad } from '@app/utils/lazyLoad';

export function Router() {
  return (
    <Suspense
      fallback={
        <div className="w-10 h-10 rounded-full border-4 border-r-primary animate-spin" />
      }
    >
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.createUser} element={<CreateUser />} />
      </Routes>
    </Suspense>
  );
}
