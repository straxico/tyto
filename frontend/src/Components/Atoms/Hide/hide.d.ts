type HideProps = {
  children: React$Node;
  on: Devices[];
  block?: boolean;
  hideDom?: boolean;
};

type HelpGetDisplay = ({ block }: { block: boolean }) => string;

type GetViewportHideStyles = (on: Devices[], block?: boolean) => Interpolation[];
