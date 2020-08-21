import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import LayoutMain from 'Layouts/LayoutMain';
import BackDrop from 'Atoms/BackDrop';
import Heading from 'Atoms/Heading';
import Stack from 'Atoms/Stack';
import InputField from 'Atoms/InputField';
import Button from 'Atoms/Button';
import LoginApi from 'api/login/login';
import { useAppContextState, useAppContextDispatch } from 'context/AppContext';

const Login = () => {
  const authState = useAppContextState();
  const authDispatch = useAppContextDispatch();

  const [state, setstate] = useState({
    username: '',
    password: '',
    email: '',
    err: [],
    token: '',
    isLoading: false,
    role: 'user',
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
    setstate({ ...state, err: [], isLoading: true });
    LoginApi({
      username: state.username,
      password: state.password,
    })
      .then(res => setstate({ ...state, token: res.token, err: res.msg, role: res.role }))
      .catch(err => setstate({ ...state, err }));
  };
  return (
    <LayoutMain>
      <BackDrop>
        <Heading>ورود</Heading>
        <Stack>
          <InputField
            label="نام کاربری"
            value={state.username}
            type="text"
            error={state.err?.find(e => e.param == 'username')?.msg}
            onChange={ev => setstate({ ...state, username: ev.target.value })}
          />
          <InputField
            label="رمز عبور"
            value={state.password}
            type="password"
            error={state.err?.find(e => e.param == 'password')?.msg}
            onChange={ev => setstate({ ...state, password: ev.target.value })}
          />
          <Button onClick={HandelSubmit} loading={state.isLoading}>
            ورود
          </Button>
        </Stack>
      </BackDrop>
    </LayoutMain>
  );
};
export default Login;
