import TgjuAxios from "./config";


const prettyNumber = (uglyNumber: string) => parseInt(uglyNumber.split(",").join(''), 10)
const serializeTgjuRes = (res: any): CryptoPriceResType[] => {

    try {
        const currencyPrice: CryptoPriceResType[] = [{
            symbol: "USD-TMN",
            price: prettyNumber(res?.current?.price_dollar_sm?.p) / 10,
            time: new Date(res?.current?.price_dollar_sm?.ts)
        }, {
            symbol: "TSMTMC-SHAKHES",
            price: prettyNumber(res?.current?.bourse?.p),
            time: new Date(res?.current?.bourse?.ts)
        }, {
            symbol: "SEKEE-TMN",
            price: prettyNumber(res?.current?.sekee?.p) / 10,
            time: new Date(res?.current?.sekee?.ts)
        }]
        return currencyPrice
    }
    catch (err) {
        console.log(err);
        return [] as unknown as CryptoPriceResType[]

    }

}

const getTgju = () => {
    const data = TgjuAxios.get("/ajax.json")
        .then(res => {
            return serializeTgjuRes(res.data);
        })
        .catch(err => {
            console.log(err);
            return [] as unknown as CryptoPriceResType[]
        });
    return data;
};
export default getTgju;
