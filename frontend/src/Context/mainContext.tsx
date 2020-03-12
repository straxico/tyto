import React, { useReducer } from 'react';

const initialState = {
  currentCurrency: 'btc-tmn',
};

const MainStateContext = React.createContext(undefined);
const MainDispatchContext = React.createContext(undefined);

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'setCurrentCurrency':
      return { ...state, currentCurrency: action.value };
    default:
      throw new Error(`Unexpected action: ${action.type}`);
  }
};

const MainProvider = (props: { children: React.ReactNode }) => {
  console.log('in MainContext');
  const [mainState, DispatchMainState] = useReducer(mainReducer, initialState);
  return (
    <MainStateContext.Provider value={mainState}>
      <MainDispatchContext.Provider value={DispatchMainState}>
        {props.children}
      </MainDispatchContext.Provider>
    </MainStateContext.Provider>
  );
};

const useMainState = () => {
  const context = React.useContext(MainStateContext);
  if (context === undefined) {
    throw new Error('useMainState must be used within a MainProvider');
  }
  return context;
};

const useMainDispatch = () => {
  const context = React.useContext(MainDispatchContext);
  if (context === undefined) {
    throw new Error('useMainDispatch must be used within a MainProvider');
  }
  return context;
};

export { MainProvider, useMainState, useMainDispatch, initialState };
