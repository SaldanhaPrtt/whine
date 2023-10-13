import axios from 'axios';

let baseURL;

switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://192.168.15.19:3000';
    break;
  case 'production':
    baseURL = 'http://192.168.15.19:3000';
    break;

  default:
    baseURL = 'http://192.168.15.19:3000';
    break;
}

const api = axios.create({ baseURL });

export default api;