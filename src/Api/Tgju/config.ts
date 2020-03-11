import axios from "axios";

const TgjuAxios = axios.create({ baseURL: "https://call3.tgju.org" });
export default TgjuAxios;
