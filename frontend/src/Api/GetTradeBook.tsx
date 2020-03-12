import API from 'Api/config';

const GetTradeBook = async currentCurrency => {
  const response = await API.get(`https://api.exir.io/v0/trades?symbol=${currentCurrency}`);
  return response.data;
};
export default GetTradeBook;
