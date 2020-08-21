type userRoles = 'non' | 'new' | 'host' | 'guest' | 'hostguest';

type AppContextStateInterface = {
  authenticated: string;
  authBody: string;
  role: userRoles;
};

type AppProviderType = {
  data: {
    domain: { split: (arg0: string) => string[] };
    authenticated: string;
    authBody: string;
  };
  children: React.ReactNode;
};

type CityContextInterface = {
  stateList: selectList;
  cityList: selectList;
  cityNum: number;
  setCityNum?: any;
};
