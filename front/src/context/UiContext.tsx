import React, { useReducer } from 'react';

const InitialState = {
  scrollingToTop: false,
  isMobile: true,
};
const UiReducer = (state, action) => {
  switch (action.type) {
    case 'scrollingToTop':
      return {
        ...state,
        scrollingToTop: action.value,
      };
    case 'isMobile':
      return {
        ...state,
        isMobile: action.value,
      };
    default:
      throw new Error(`Unexpected action: ${action.type}`);
  }
};

const UiStateContext = React.createContext<any>(undefined);
const UiDispatchContext = React.createContext<any>(undefined);

const UiProvider = (props: { children: React.ReactNode }) => {
  console.log('in SearchFilterContext');

  const [uiState, setUiState] = useReducer(UiReducer, InitialState);
  return (
    <UiStateContext.Provider value={uiState}>
      <UiDispatchContext.Provider value={setUiState}>{props.children}</UiDispatchContext.Provider>
    </UiStateContext.Provider>
  );
};

const useUiState = () => {
  const context = React.useContext(UiStateContext);
  if (context === undefined) {
    throw new Error('useSearchFilterState must be used within a SearchFilterProvider');
  }
  return context;
};

const useUiDispatch = () => {
  const context = React.useContext(UiDispatchContext);
  if (context === undefined) {
    throw new Error('useSearchFilterDispatch must be used within a SearchFilterProvider');
  }
  return context;
};

export { UiProvider, useUiState, useUiDispatch, InitialState };
