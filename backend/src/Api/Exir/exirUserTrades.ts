import ExirAxios from "./config";
import logger from "../../Utils/logger";

const getExirUserTrades = ({
  token,
  limit,
  symbol,
  page
}: getExirUserTradesProp) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    params: { limit, symbol, page }
  };

  const data = ExirAxios.get("/user/trades", config)
    .then(res => {
      return res.data as exirUserTradesRes;
    })
    .catch(err => {
      logger.info(["API EXIR getExirUserTrades err", err.response.data.message, symbol]);
      return [] as exirUserTradesRes
    });
  return data;
};
export default getExirUserTrades;
