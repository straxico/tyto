import Arz360Axios from "./config";
import { JSDOM } from "jsdom";

const initCurrencyPrice = {
    name: "",
    buyMax: 0,
    buyMin: 0,
    sellMax: 0,
    sellMin: 0,
}
const prettyNumber = (uglyNumber: string) => parseInt(uglyNumber.split(" ")[0].replace(",", ""), 10)

const serializeArz360res = (res: string) => {
    try {
        const currencyIndex = 0
        const dom = new JSDOM(res);
        const AllcurrencyTable = dom.window.document.getElementsByTagName('tbody').item(0).getElementsByTagName('tr')
        const currencyTable = AllcurrencyTable.item(currencyIndex * 7).getElementsByTagName('td')
        const currencyPrice = {
            name: currencyTable.item(0).textContent,
            buyMax: prettyNumber(currencyTable.item(7).textContent),
            buyMin: prettyNumber(currencyTable.item(8).textContent),
            sellMax: prettyNumber(currencyTable.item(10).textContent),
            sellMin: prettyNumber(currencyTable.item(11).textContent),
        }
        return currencyPrice
    }
    catch (err) {
        console.log(err);
        return initCurrencyPrice
    }

}

const getUsdTmnArz360 = () => {
    const data = Arz360Axios.get("/")
        .then(res => {
            return serializeArz360res(res.data);
        })
        .catch(err => {
            console.log(err);
            return initCurrencyPrice
        });
    return data;
};
export default getUsdTmnArz360;
