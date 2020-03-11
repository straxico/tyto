import ExirAxios from "./config";

const getExirTrade = async ({ symbol }: { symbol?: exirSymbols }) => {
  const config = {
    params: { symbol }
  };
  try {
    const res = await ExirAxios.get("/trades", config);
    return res.data as exirTradesRes;
  }
  catch (err) {
    console.log(err);
  }
};
export default getExirTrade;
