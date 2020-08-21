import React from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

const AppContextState = React.createContext<userContextData>(undefined);
const AppContextDispatch = React.createContext<
  React.Dispatch<React.SetStateAction<userContextData>>
>(undefined);

const appInitialState: userContextData = {
  token: '',
  role: 'user',
};

const AppProvider = (props: { children: React.ReactNode }) => {
  const [appState, setAppState] = useLocalStorage('appStae', appInitialState);
  return (
    <AppContextState.Provider value={appState as userContextData}>
      <AppContextDispatch.Provider
        value={setAppState as React.Dispatch<React.SetStateAction<userContextData>>}>
        {props.children}
      </AppContextDispatch.Provider>
    </AppContextState.Provider>
  );
};

const useAppContextState = () => {
  const context = React.useContext(AppContextState);
  return context;
};

const useAppContextDispatch = () => {
  const context = React.useContext(AppContextDispatch);
  return context;
};

export { AppProvider, useAppContextState, useAppContextDispatch };
