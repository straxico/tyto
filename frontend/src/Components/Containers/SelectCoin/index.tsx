import React from 'react';
import Popover from 'Atoms/Popover';
import Button from 'Atoms/Button';
import { useMainState } from 'Context/mainContext';
import CoinSelectList from './Coinlist';

const SelectCoin = () => {
  const { currentCurrency } = useMainState();
  return (
    <Popover content={CoinSelectList()}>
      <Button type="secondary">{currentCurrency}</Button>
    </Popover>
  );
};

export default SelectCoin;
