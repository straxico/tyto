import React from 'react';
import Styled from 'styled-components';
import { DetailItem, TradeItem, MoreItem } from './Items';

const StyledNav = Styled(({ className, children }) => <nav className={className}>{children}</nav>)`
  direction: ltr;
    display: flex;
    align-items: center;
    border-top: 1px solid #EBEBEB;
    position: fixed ;
    bottom: 0;
    height: 60px ;
    left: 0px ;
    right: 0px ;
    overflow: hidden ;
    background: #ffffff ;
    z-index: 1 ;
    transition: transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
  }
`;

const Navigation = props => {
  console.log('Nav');

  return (
    <StyledNav>
      <DetailItem />
      <TradeItem />
      <MoreItem>strix-exir</MoreItem>
    </StyledNav>
  );
};
export default Navigation;
