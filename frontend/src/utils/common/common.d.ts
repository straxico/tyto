type Globals = { dataTest?: string };

type RefType = () => { current: HTMLElement | null };

type Ref = { ref?: RefType };

type Translation = React$Element<React$ComponentType<any>> | string;

type Component = React.ComponentType<{ className: string }>;
type spaceAfterItems = 'none' | 'smallest' | 'small' | 'normal' | 'medium' | 'large' | 'largest';
type spaceAfter = {
  spaceAfter?: spaceAfterItems;
};
type SpacingTokenProps = spaceAfter & { theme: defaultTheme };
