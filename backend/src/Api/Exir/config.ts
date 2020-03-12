import axios from "axios";

const ExirAxios = axios.create({ baseURL: "https://api.exir.io/v0" });
export default ExirAxios;
