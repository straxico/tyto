import React from 'react';
import Stack from 'Atoms/Stack';
import Button from 'Atoms/Button';
import { coinList } from 'utils/constant';
import { useMainDispatch } from 'Context/mainContext';

const CoinSelectList = () => {
  const mainDispatch = useMainDispatch();
  const handleClick = currentCurrency => {
    mainDispatch({ type: 'setCurrentCurrency', value: currentCurrency });
    console.log(currentCurrency);
  };
  return (
    <>
      <Stack align="center" justify="center">
        {coinList.map(({ id, name }) => (
          <Button bordered size="small" onClick={() => handleClick(id)} key={name}>
            {name}
          </Button>
        ))}
      </Stack>
    </>
  );
};
export default CoinSelectList;
