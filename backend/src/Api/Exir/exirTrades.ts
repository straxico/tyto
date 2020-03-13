import ExirAxios from "./config";
import logger from "../../Utils/logger";

const getExirTrade = async ({ symbol }: { symbol?: exirSymbols }) => {
  const config = {
    params: { symbol }
  };
  try {
    const res = await ExirAxios.get("/trades", config);
    return res.data as exirTradesRes;
  }
  catch (err) {
    logger.info(["API EXIR getExirTrade err", err.response.data.message, symbol]);

  }
};
export default getExirTrade;
