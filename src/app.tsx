import clsx from 'clsx';
import { BrowserRouter, Link } from 'react-router-dom';

import { ThemeProvider } from '@app/contexts/ThemeContext';
import { useVisibility } from '@app/contexts/VisibilityContext';
import { Router } from '@app/router';
import { routes } from '@app/router/routes';
import { isEnvBrowser } from '@app/utils/misc';
import { ThemeSwitcher } from '@views/components/theme-switcher';
import { Button } from '@views/components/ui/button';

export function App() {
  const { visible } = useVisibility();

  isEnvBrowser() && window.postMessage({ action: 'setVisible', payload: true });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <BrowserRouter>
        <div
          className={clsx(
            'w-screen h-screen flex items-center justify-center absolute left-0 top-0',
            isEnvBrowser() && 'bg-dev',
          )}
        >
          <div
            className={clsx(
              'w-[85%] h-[85%] bg-background rounded-lg max-[1800px]:[zoom:0.8] max-[1440px]:[zoom:0.6] max-[1080px]:[zoom:0.5] transition-all duration-500',
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
            )}
          >
            {visible && (
              <>
                <header className="border-b p-6 mb-10 flex items-center gap-6">
                  <Link to={routes.home}>Home</Link> <br />
                  <Link to={routes.createUser}>Create user</Link>
                </header>
                <Button>Enviar</Button>
                <ThemeSwitcher />
                <Router />
              </>
            )}
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
