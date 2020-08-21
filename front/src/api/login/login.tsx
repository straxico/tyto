import API from 'api/axios';

const LoginApi = async (data: loginApiData) => {
  try {
    const response = await API.post('/login', data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const RegisterApi = async (data: RegisterApiData) => {
  try {
    const response = await API.post('/register', data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default LoginApi;
