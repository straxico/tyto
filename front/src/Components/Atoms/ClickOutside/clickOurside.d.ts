type ClickOutsideProps = {
  onClickOutside?: (ev: MouseEvent) => void | Promise<any>;
  children: React$Node | React$Node[];
};
