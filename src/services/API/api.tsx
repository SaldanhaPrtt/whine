import axios from 'axios';

let baseURL;

switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://app.roehn.com/api/';
    break;
  case 'production':
    baseURL = 'http://app.roehn.com/api/';
    break;

  default:
    baseURL = 'http://app.roehn.com/api/';
    break;
}

const api = axios.create({ baseURL });

export default api;