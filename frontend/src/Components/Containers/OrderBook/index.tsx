import React, { useState, useEffect } from 'react';
import GetOrderBook from 'Api/GetOrderBook';
import { useMainState } from 'Context/mainContext';
import Stack from 'Atoms/Stack';
import Card, { CardSection, CardHeader } from 'Atoms/Card';
import Text from 'Atoms/Text';

const initialOrderbook = { timestamp: null, bids: [], asks: [] };

const OrderBook = () => {
  const MainState = useMainState();
  const [orderbook, setOrderbook] = useState(initialOrderbook);

  const orderbooknewData = async () => {
    const result = await GetOrderBook(MainState.currentCurrency);
    setOrderbook(result[MainState.currentCurrency]);
  };
  useEffect(() => {
    setOrderbook(initialOrderbook);
    orderbooknewData();
    const interval = setInterval(() => {
      orderbooknewData();
    }, 7000);
    return () => clearInterval(interval);
  }, [MainState]);
  const orderbooktolist = orderbookValue => {
    return (
      <>
        {orderbookValue.map((value: [number, number]) => (
          <Stack key={value[0]} justify="around">
            <Text>{value[0].toLocaleString()}</Text>
            <Text>{value[1].toLocaleString()}</Text>
            <Text>{Math.round(value[1] * value[0]).toLocaleString()}</Text>
          </Stack>
        ))}
      </>
    );
  };

  return (
    <Card>
      <CardHeader title="OrderBook" subTitle={new Date(orderbook.timestamp).toLocaleTimeString()} />
      <Stack justify="around">
        <Text>Price(Tmn)</Text>
        <Text>Amount</Text>
        <Text>Total(Tmn)</Text>
      </Stack>
      <CardSection>{orderbooktolist(orderbook.asks.reverse())}</CardSection>
      <CardSection>{orderbooktolist(orderbook.bids)}</CardSection>
    </Card>
  );
};
export default OrderBook;
