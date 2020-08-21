import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import defaultTheme from 'utils/token';

const useTheme: () => typeof defaultTheme = () => useContext(ThemeContext) || defaultTheme;

export default useTheme;
