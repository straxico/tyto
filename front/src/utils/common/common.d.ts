type Globals = { dataTest?: string };
type DataAttrs = {
  readonly dataAttrs?: {
    [key: string]: (string | null | undefined) | (boolean | null | undefined);
  };
};
type RefType = () => { current: HTMLElement | null };

type Ref = { ref?: RefType };

type Translation = React$Element<React$ComponentType<any>> | string;
type TranslationString = string;

type Component = React.ComponentType<{ className: string }>;

type spaceAfterType = 'none' | 'smallest' | 'small' | 'normal' | 'medium' | 'large' | 'largest';
type spaceAfter = {
  spaceAfter?: spaceAfterType;
};
type SpacingTokenProps = spaceAfter & { theme: defaultTheme };
