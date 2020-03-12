import React, { useState } from 'react';
import Drawer from 'Atoms/Drawer';
import NavItem from './NavItem';

export const DetailItem = () => {
  return <NavItem href="/">Home</NavItem>;
};

export const TradeItem = () => {
  return <NavItem href="/trade">Trade</NavItem>;
};

export const MoreItem = props => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <NavItem icon="reorder" onClick={() => setShowDrawer(true)}>
        ...
      </NavItem>
      <Drawer
        bodyNotScroll
        shown={showDrawer}
        width="480px"
        position="left"
        onClose={() => setShowDrawer(false)}>
        {props.children}
      </Drawer>
    </>
  );
};
