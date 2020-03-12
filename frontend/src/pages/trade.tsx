import React from 'react';
import LayoutMain from 'Layout/Main';
import Heading from 'Atoms/Heading';
import { useMainState } from 'Context/mainContext';
import Stack from 'Atoms/Stack';
import Grid from 'Atoms/Grid';
import OrderBook from 'Containers/OrderBook';
import TradeBook from 'Containers/TradeBook';

const Trade = () => {
  return (
    <LayoutMain>
      <Heading>Trade</Heading>
      <Grid desktop={{ columns: 'repeat(3, minmax(100px, 1fr))', columnGap: '40px' }}>
        <OrderBook />
        <TradeBook />
      </Grid>
    </LayoutMain>
  );
};
export default Trade;
