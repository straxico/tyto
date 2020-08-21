import React from 'react';
import Footer from './Partials/Footer';

const LayoutMain = props => (
  <>
    {props.children}
    <Footer />
  </>
);

export default LayoutMain;
