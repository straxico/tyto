import React, { useState, useEffect } from 'react';
import BackDrop from 'Atoms/BackDrop';
import Heading from 'Atoms/Heading';
import Stack from 'Atoms/Stack';
import InputField from 'Atoms/InputField';
import Button from 'Atoms/Button';
import LayoutMain from 'Layouts/LayoutMain';
import { RegisterApi } from 'api/login/login';
import { useAppContextDispatch, useAppContextState } from 'context/AppContext';
import Router from 'next/router';

const Register = () => {
  const authState = useAppContextState();
  const authDispatch = useAppContextDispatch();

  const [state, setstate] = useState({
    username: '',
    password: '',
    email: '',
    err: '',
    token: '',
    isLoading: false,
  });

  useEffect(() => {
    if (state.token) {
      authDispatch({ ...authState, token: state.token, role: 'user' });
    }
  }, [state]);

  useEffect(() => {
    if (authState.token) {
      Router.push('/');
    }
  }, [authState]);

  const HandelSubmit = () => {
    setstate({ ...state, isLoading: true });
    RegisterApi({
      username: state.username,
      password: state.password,
      email: state.email,
      role: 'user',
    })
      .then(res => setstate({ ...state, token: res.token, err: res.msg }))
      .catch(err => setstate({ ...state, err }));
  };
  return (
    <LayoutMain>
      <BackDrop>
        <Heading>register</Heading>
        <Stack>
          <InputField
            label="نام کاربری"
            value={state.username}
            type="text"
            onChange={ev => setstate({ ...state, username: ev.target.value })}
          />
          <InputField
            label="رمز عبور"
            value={state.password}
            type="password"
            onChange={ev => setstate({ ...state, password: ev.target.value })}
          />
          <InputField
            label="ایمیل"
            type="email"
            value={state.email}
            onChange={ev => setstate({ ...state, email: ev.target.value })}
          />

          <Button onClick={HandelSubmit} loading={state.isLoading}>
            ثبت نام
          </Button>
        </Stack>
      </BackDrop>
    </LayoutMain>
  );
};

export default Register;
