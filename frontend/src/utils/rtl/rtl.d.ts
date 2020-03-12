type LeftToRight = <T1, T2>(left: T1, right: T2) => (theme: ThemeProps) => T1 | T2;
type RtlSpacing = (value: string) => (theme: ThemeProps) => string;
type BorderRadius = (value: string) => (theme: ThemeProps) => string;
type TextAlign = (value: 'left' | 'right' | 'center') => (theme: ThemeProps) => string;
type Translate3d = (value: string) => (themeProps: ThemeProps) => string;
