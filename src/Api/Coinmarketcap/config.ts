import axios from "axios";

const CoinmarketcapAxios = axios.create({ baseURL: "https://pro-api.coinmarketcap.com/v1/" });
export default CoinmarketcapAxios;
