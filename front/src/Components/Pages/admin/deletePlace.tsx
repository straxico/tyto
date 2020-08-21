import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import LayoutMain from 'Layouts/LayoutMain';
import BackDrop from 'Atoms/BackDrop';
import Heading from 'Atoms/Heading';
import Stack from 'Atoms/Stack';
import InputField from 'Atoms/InputField';
import Button from 'Atoms/Button';
import { useAppContextState, useAppContextDispatch } from 'context/AppContext';
import Textarea from 'Atoms/Textarea';
import { AddPlaceApi, DeletePlaceApi } from 'api/place';
import ButtonLink from 'Atoms/ButtonLink';

const DeletePlace = ({ placeId }: { placeId: number }) => {
  const [state, setstate] = useState({
    name: '',
    description: '',
    err: [],
    placeId: '',
    isLoading: false,
  });

  const HandelSubmit = () => {
    setstate({ ...state, err: [], isLoading: true });
    DeletePlaceApi(placeId)
      .then(res => setstate({ ...state, placeId: res.placeId, err: res.msg, isLoading: false }))
      .catch(err => setstate({ ...state, err }));
  };

  useEffect(() => {
    if (state.placeId) {
      Router.push('/admin');
    }
  }, [state]);

  return <>{!state.placeId && <Button onClick={HandelSubmit}>حذف</Button>}</>;
};
export default DeletePlace;
