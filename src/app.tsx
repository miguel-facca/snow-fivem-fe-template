import clsx from 'clsx';
import { useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { ThemeProvider } from '@app/contexts/ThemeContext';
import { useVisibility } from '@app/contexts/VisibilityContext';
import { Router } from '@app/router';
import { routes } from '@app/router/routes';
import { getMainColor } from '@app/utils/colors';

export function App() {
  const { visible } = useVisibility();

  useEffect(() => {
    if (!visible) return;

    getMainColor();
  }, [visible]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <BrowserRouter>
        <div
          className={clsx(
            'w-[120rem] h-[56.25rem] bg-black rounded-lg transition-all duration-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
          )}
        >
          {visible && (
            <>
              <header className="border-b border-white/15 p-6 mb-10 flex items-center gap-6">
                <Link to={routes.home}>Home</Link> <br />
                <Link to={routes.createUser}>Create user</Link>
              </header>
              <div className="h-[49.25rem] w-full">
                <Router />
              </div>
            </>
          )}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
