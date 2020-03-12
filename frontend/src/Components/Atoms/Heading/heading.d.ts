type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
type HeadingType =
  | 'display'
  | 'displaySubtitle'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'title5';

type HeadingProps = Globals &
  spaceAfter & {
    element?: HeadingElement;
    type?: HeadingType;
    children: React$Node;
    inverted?: boolean;
    dataA11ySection?: string;
    id?: string;
  };

type GetHeadingToken = (
  name: string,
) => (
  arg0: ThemeProps & {
    type: Type;
  },
) => string;
