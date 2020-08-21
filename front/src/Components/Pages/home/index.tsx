import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlaceGetAllApi from 'api/place';
import Heading from 'Atoms/Heading';
import Loading from 'Atoms/Loading';
import Stack from 'Atoms/Stack';
import Text from 'Atoms/Text';

const StyledHeading = styled.div`
  margin: 43px 0 173px 0;
  z-index: 1;
  position: relative;
`;
const StyledBg = styled.div`
  background-image: url(/static/images/bg.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  top: 0;
  position: absolute;
  height: 280px;
`;
const StyledCard = styled.div`
  padding: 8px;
  margin: 8px 0px 0 0;
  max-width: 400px;
  box-shadow: 0px 1px 3px grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const Home = () => {
  const [state, setstate] = useState({
    places: [],
    isLoading: false,
    role: 'user',
  });
  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    setstate({ ...state, isLoading: true });
    PlaceGetAllApi().then(res =>
      setstate({ ...state, places: res.existedPlace, isLoading: false }),
    );
  }, []);

  return (
    <>
      <StyledBg />
      <StyledHeading>
        <Heading inverted type="title1" element="h1">
          تایتو
        </Heading>
        <Heading inverted type="title2" element="h2">
          کوهنوردی و طبیعت گردی
        </Heading>
      </StyledHeading>
      <Heading>نقاط دیدنی</Heading>
      {state.isLoading && <Loading type="pageLoader" />}
      {state.places.map(item => (
        <StyledCard>
          <Stack>
            <Text>{item.name}</Text>
            <Text>{item.placeId}</Text>
            <Text>{item.description}</Text>
          </Stack>
        </StyledCard>
      ))}
    </>
  );
};

export default Home;
