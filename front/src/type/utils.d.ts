type userRole = 'user' | 'admin';
type loginApiData = { username: string; password: string };
type RegisterApiData = { username: string; password: string; email: string; role: userRole };
type AddPlaceApiData = { name: string; description: string };

type userContextData = {
  token: string;
  role: userRole;
};

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V;

// svg file type
declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
