type illustrationSizeType = 'small' | 'medium' | 'large' | 'display';
type illustrationProps = Globals &
  spaceAfter & {
    size?: illustrationSizeType;
    name: string;
  };
