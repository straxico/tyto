import ExirAxios from "./config";

export const getExirUserAllOrders = ({
  token,
  symbol
}: {
  token: string;
  symbol?: exirSymbols;
}) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    params: { symbol }
  };

  const data = ExirAxios.get("/user/orders", config)
    .then(res => {
      return res.data as exirUserAllOrdersRes;
    })
    .catch(err => {
      console.log(err);
      return [] as exirUserAllOrdersRes
    });
  return data;
};

export const getExirUserOrderById = ({
  token,
  orderId
}: {
  token: string;
  orderId: string;
}) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const data = ExirAxios.get(`/user/orders/${orderId}`, config)
    .then(res => {
      return res.data as exirOrderRes;
    })
    .catch(err => {
      console.log(err);
    });
  return data;
};
