import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlaceGetAllApi, { DeletePlaceApi } from 'api/place';
import Heading from 'Atoms/Heading';
import Loading from 'Atoms/Loading';
import Stack from 'Atoms/Stack';
import Text from 'Atoms/Text';
import List from 'Atoms/List';
import Button from 'Atoms/Button';
import ButtonLink from 'Atoms/ButtonLink';
import DeletePlace from './deletePlace';

const Admin = () => {
  const [state, setstate] = useState({
    places: [],
    isLoading: false,
    role: 'user',
  });
  const hendelDeletePlace = placeId => {
    DeletePlaceApi(placeId).then;
  };
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
      <Heading>نقاط دیدنی</Heading>
      {state.isLoading && <Loading type="pageLoader" />}
      <ButtonLink href="/admin/addPlace">افزودن مکان</ButtonLink>
      <Stack>
        {state.places.map(item => (
          <List>
            <>
              <Text>{item.name}</Text>
              <Text>{item.placeId}</Text>
              <Text>{item.description}</Text>
              <DeletePlace placeId={item.placeId} />
            </>
          </List>
        ))}
      </Stack>
    </>
  );
};

export default Admin;
