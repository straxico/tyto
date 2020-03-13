import ExirAxios from "./config";
import logger from "../../Utils/logger";

const init: exirBalanceRes = {
  updated_at: "0",
  fiat_balance: 0,
  fiat_pending: 0,
  fiat_available: 0,
  btc_balance: 0,
  btc_pending: 0,
  btc_available: 0,
  eth_balance: 0,
  eth_pending: 0,
  eth_available: 0,
  bch_balance: 0,
  bch_pending: 0,
  bch_available: 0,
  usdt_balance: 0,
  usdt_pending: 0,
  usdt_available: 0
};
const getExirBalance = ({ token }: { token: string }) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const data = ExirAxios.get("/user/balance", config)
    .then(res => {
      return res.data as exirBalanceRes;
    })
    .catch(err => {
      logger.info(["API EXIR getExirBalance err"]);

      return init
    });
  return data;
};
export default getExirBalance;
