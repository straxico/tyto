import React from 'react';
import Navigation from 'Containers/Navigation';
import SelectCoin from 'Containers/SelectCoin';

const LayoutMain = props => (
  <>
    <style jsx global>
      {`
        @font-face {
          font-family: 'JIS';
          font-style: normal;
          font-weight: normal;
          src: url('/fonts/IRANSansWeb\(FaNum\).woff') format('woff');
        }
        body {
          font-family: 'JIS', sans-serif, 'OpenSansRegular', Helvetica, Arial;
          direction: rtl;
        }
      `}
    </style>
    <header>
      <SelectCoin />
      <Navigation />
    </header>
    {props.children}
  </>
);

export default LayoutMain;
