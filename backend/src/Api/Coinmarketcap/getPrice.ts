import CoinmarketcapAxios from "./config";
import { COINMARKETCAP_TOKEN } from "../../Utils/secrets";

const serializeCoinmarketcap = (res: any): CryptoPriceResType[] => {
    if (res.data) {
        const data = res.data
        return data.map((item: any) => ({
            symbol: `${item.symbol}-USDT`,
            time: item.last_updated,
            price: Math.floor(item.quote.USDT.price * 100) / 100,
        }))
    }
    return [] as unknown as CryptoPriceResType[]
}

const getCoinmarketcap = async () => {
    const config = {
        headers: {
            "X-CMC_PRO_API_KEY": COINMARKETCAP_TOKEN
        }
    };
    try {
        const res = await CoinmarketcapAxios.get("/cryptocurrency/listings/latest?start=1&limit=4&convert=USDT", config);        
        return serializeCoinmarketcap(res.data);
    }
    catch (err) {
        console.log(err);
        return serializeCoinmarketcap([]);
    }
};
export default getCoinmarketcap;
