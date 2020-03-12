import API from 'Api/config';

const GetOrderBook = async currentCurrency => {
  const response = await API.get(`https://api.exir.io/v0/orderbooks?symbol=${currentCurrency}`);
  return response.data;
};
export default GetOrderBook;
