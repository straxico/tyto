import axios from 'axios';
import { apiBaseUrl } from 'utils/constant';

export default axios.create({ baseURL: apiBaseUrl });
