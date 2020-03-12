type AvatarSize = 'normal' | 'small';

type AvatarGetSize = ({ size, theme }: { size: AvatarSize; theme: ThemeProps }) => string;

type AvatarProps = {
  src: string;
  alt?: string;
  size?: AvatarSize;
};
