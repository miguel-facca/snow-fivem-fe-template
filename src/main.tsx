import React from 'react';
import ReactDOM from 'react-dom/client';

import '@views/styles/index.css';

import { VisibilityProvider } from '@app/contexts/VisibilityContext';

import { App } from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <App />
    </VisibilityProvider>
  </React.StrictMode>,
);
