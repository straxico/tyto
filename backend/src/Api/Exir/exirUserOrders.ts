import ExirAxios from "./config";
import logger from "../../Utils/logger";

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
      logger.info(["API EXIR getExirUserAllOrders err", err.response.data.message, symbol]);

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
      logger.info(["API EXIR getExirUserOrderById err", err]);
    });
  return data;
};
