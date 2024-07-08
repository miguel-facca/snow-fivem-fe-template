import { BrowserRouter, Link } from 'react-router-dom';

import { ThemeProvider } from '@app/contexts/ThemeContext';
import { Router } from '@app/router';
import { routes } from '@app/router/routes';
import { ThemeSwitcher } from '@views/components/theme-switcher';
import { Button } from '@views/components/ui/button';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <BrowserRouter>
        <header className="border-b p-6 mb-10 flex items-center gap-6">
          <Link to={routes.home}>Home</Link> <br />
          <Link to={routes.createUser}>Create user</Link>
        </header>
        <Button>Enviar</Button>
        <ThemeSwitcher />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
