type LoadingType = 'buttonLoader' | 'boxLoader' | 'searchLoader' | 'pageLoader' | 'inlineLoader';

type LoadingProps = Globals & {
  children?: React$Node;
  loading?: boolean;
  type?: LoadingType;
  text?: Translation;
};
