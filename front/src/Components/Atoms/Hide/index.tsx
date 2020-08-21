import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import useWindowViewPort from 'hooks/useWindowViewPort';
import getViewportHideStyles from './helpers/getViewportHideStyles';
import getHideDom from './helpers/getHideDom';

const StyledHide = styled(({ hideDom, className, ...props }) => {
  const Element = 'span';
  return <Element className={className}>{props.children}</Element>;
})<{ on: Devices[]; block: boolean; hideDom: boolean }>`
  ${({ on, block, hideDom }) => !hideDom && getViewportHideStyles(on, block)};
`;

StyledHide.defaultProps = {
  theme: defaultTheme,
};

const Hide = ({ on = [], block, children, hideDom }: HideProps) => {
  const [showDom, setShowDom] = React.useState(true);
  const viewport = useWindowViewPort();
  React.useEffect(() => {
    if (hideDom) {
      setShowDom(getHideDom(on, viewport));
    }
  }, [viewport]);

  return (
    showDom && (
      <StyledHide on={on} block={block} hideDom={hideDom}>
        {children}
      </StyledHide>
    )
  );
};

export default Hide;
