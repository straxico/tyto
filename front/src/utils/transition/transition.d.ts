type Transition = (
  properties: string[],
  duration: 'slow' | 'normal' | 'fast',
  timingFunction: string,
) => (theme: ThemeProps) => string;
