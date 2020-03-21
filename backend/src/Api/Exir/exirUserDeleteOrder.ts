import ExirAxios from "./config";
import logger from "../../Utils/logger";


export const getExirUserDeleteAllOrder = ({
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

  const data = ExirAxios.delete("/user/orders", config)
    .then(res => {
      logger.info(res.data);
      return res.data as exirOrderRes;
    })
    .catch(err => {
      console.log(err);
    });
  return data;
};

export const getExirUserDeleteOrderById = ({
  token,
  orderId
}: {
  token: string;
  orderId: string;
}) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const data = ExirAxios.delete(`/user/orders/${orderId}`, config)
    .then(res => {
      logger.info(["API EXIR delete", res.data.created_by, res.data.symbol, res.data.side, res.data.price, res.data.size]);
      return res.data as exirOrderRes;
    })
    .catch(err => {
      logger.info(["API EXIR delete err", err.message]);      
    });
  return data;
};
