type ImageObject = {
  jpg: string;
  webp: string;
};

type LazyImageProps = {
  placeholder?: ImageObject;
  original: ImageObject;
  name: Translation;
};

type LazyImageState = {
  loaded: boolean;
};

type PictureProps = {
  pictures: ImageObject;
  name: string;
  loaded: boolean;
  onLoad?: () => void;
  lowRes?: boolean;
};
