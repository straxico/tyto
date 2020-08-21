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
import { AddPlaceApi, placeImageUpload } from 'api/place';
import InputFile from 'Atoms/InputFile';

const acceptedTypes: string[] = ['image/png', 'image/jpg', 'image/jpeg'];

const AddPlace = () => {
  const authState = useAppContextState();
  const authDispatch = useAppContextDispatch();

  const [state, setstate] = useState({
    name: '',
    description: '',
    err: [],
    placeId: '',
    isLoading: false,
    file: null,
  });

  const HandelSubmit = () => {
    setstate({ ...state, err: [], isLoading: true });
    AddPlaceApi({
      name: state.name,
      description: state.description,
    })
      .then(res => setstate({ ...state, placeId: res.placeId, err: res.msg }))
      .catch(err => setstate({ ...state, err }));
  };

  useEffect(() => {
    if (state.placeId) {
      Router.push('/admin');
    }
  }, [state]);

  useEffect(() => {
    if (state.file) {
      console.log({ ss: placeImageUpload(state.file) });
    }
  }, [state.file]);

  return (
    <LayoutMain>
      <BackDrop>
        <Heading>ثبت مکان جدید</Heading>
        <Stack>
          <InputField
            label="نام مکان"
            value={state.name}
            type="text"
            error={state.err?.find(e => e.param == 'name')?.msg}
            onChange={ev => setstate({ ...state, name: ev.target.value })}
          />
          <Textarea
            label="توضیحات"
            value={state.description}
            error={state.err?.find(e => e.param == 'description')?.msg}
            onChange={ev => setstate({ ...state, description: ev.target.value })}
          />
          <input
            type="file"
            name="file"
            accept={acceptedTypes.toString()}
            onChange={e => {
              if (e.target.files && e.target.files.length > 0) {
                setstate({ ...state, file: e.target.files[0] });
              }
            }}
          />
          <Button onClick={HandelSubmit} loading={state.isLoading}>
            ثبت مکان
          </Button>
        </Stack>
      </BackDrop>
    </LayoutMain>
  );
};
export default AddPlace;
