import React from 'react';
import ReactDOM from 'react-dom/client';

import '@views/styles/index.css';

import { VisibilityProvider } from '@app/contexts/VisibilityContext';
import { isEnvBrowser } from '@app/utils/misc';

import { App } from './app';

if (isEnvBrowser()) {
  const body = document.getElementById('root');

  body!.style.backgroundImage = "url('https://files.catbox.moe/g06d8k.jpg')";
  body!.style.backgroundSize = 'cover';
  body!.style.backgroundRepeat = 'no-repeat';
  body!.style.backgroundPosition = 'center';
  body!.style.height = '100vh';
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <App />
    </VisibilityProvider>
  </React.StrictMode>,
);
