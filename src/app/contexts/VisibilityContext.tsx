import { createContext, useContext, useState } from 'react';

import { useNuiMessage } from '@app/hooks/useNuiMessage';
import { isEnvBrowser } from '@app/utils/misc';

type VisibilityProviderProps = {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
};

type VisibilityProviderState = {
  visible: boolean;
  setVisible: (newVisibility: boolean) => void;
};

const VisibilityProviderContext = createContext<VisibilityProviderState>({
  visible: false,
  setVisible: () => {},
});

export function VisibilityProvider({ children }: VisibilityProviderProps) {
  const [visible, setVisible] = useState<boolean>(isEnvBrowser());

  useNuiMessage('setVisible', setVisible);

  return (
    <VisibilityProviderContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
    </VisibilityProviderContext.Provider>
  );
}

export const useVisibility = () => {
  const context = useContext(VisibilityProviderContext);

  if (context === undefined)
    throw new Error('useVisibility must be used within a ThemeProvider');

  return context;
};
