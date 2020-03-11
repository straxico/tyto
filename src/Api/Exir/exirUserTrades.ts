import ExirAxios from "./config";

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
      console.log(err);
      return [] as exirUserTradesRes
    });
  return data;
};
export default getExirUserTrades;
