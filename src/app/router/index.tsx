import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { lazyLoad } from '@app/utils/lazyLoad';
import { isEnvBrowser } from '@app/utils/misc';

import { routes } from './routes';

const { Home } = lazyLoad(() => import('@views/pages/Home'));
const { CreateUser } = lazyLoad(() => import('@views/pages/CreateUser'));

if (isEnvBrowser()) {
  window.postMessage({ action: 'setVisible', data: true });
}

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
