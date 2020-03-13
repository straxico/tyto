import logger from "../../Utils/logger";

import ExirAxios from "./config";
const getExirUserCreateOrder = ({
  token,
  symbol,
  side,
  size,
  price
}: getExirUserCreateOrderProp) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const body = { symbol, side, size, type: "limit", price };

  const data = ExirAxios.post("/order", body, config)
    .then(res => {
      logger.info(["API EXIR create", res.data.created_by, symbol, side, price, size]);
      return res.data as exirOrderRes;
    })
    .catch(err => {
      logger.info(["API EXIR create err", err.response.data.message, symbol, side, price, size]);

    });
  return data;
};
export default getExirUserCreateOrder;
