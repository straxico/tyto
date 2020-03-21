import axios from "axios";

const AlexaAxios = axios.create({ baseURL: "http://www.alexa.com/siteinfo" });
export default AlexaAxios;
