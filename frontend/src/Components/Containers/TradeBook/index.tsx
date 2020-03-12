import React, { useState, useEffect } from 'react';
import { useMainState } from 'Context/mainContext';
import Stack from 'Atoms/Stack';
import Card, { CardHeader, CardSection } from 'Atoms/Card';
import Text from 'Atoms/Text';
import GetTradeBook from 'Api/GetTradeBook';

type TradebookType = { timestamp: string; price: number; side: string; size: number }[];

const TradeBook = () => {
  const MainState = useMainState();
  const [tradebook, setTradebook] = useState<TradebookType>([]);

  const tradebooknewData = async () => {
    const result = await GetTradeBook(MainState.currentCurrency);
    setTradebook(result[MainState.currentCurrency]);
  };

  useEffect(() => {
    tradebooknewData();
    const interval = setInterval(() => {
      tradebooknewData();
    }, 7000);
    return () => clearInterval(interval);
  }, [MainState]);

  return (
    <Card>
      <CardHeader title="Tradebook" />

      <CardSection>
        <Stack justify="around">
          <Text>Price(Tmn)</Text>
          <Text>Amount</Text>
          <Text>Total(Tmn)</Text>
          <Text>Side</Text>
        </Stack>

        {tradebook.map(({ timestamp, price, side, size }) => (
          <Stack key={`${timestamp}${size}`} justify="around">
            <Text>{price.toLocaleString()}</Text>
            <Text>{size.toLocaleString()}</Text>
            <Text>{(size * price).toLocaleString()}</Text>
            <Text>{side}</Text>
          </Stack>
        ))}
      </CardSection>
    </Card>
  );
};
export default TradeBook;
