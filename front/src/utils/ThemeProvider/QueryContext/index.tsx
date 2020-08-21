import React from 'react';

const QueryContext: React.Context<QueryContextProps> = React.createContext({
  isLargeDesktop: null,
  isDesktop: null,
  isLargeMobile: null,
  isMediumMobile: null,
  isTablet: null,
  prefersReducedMotion: null,
});
QueryContext.displayName = 'QueryOrbitContext';

export default QueryContext;
