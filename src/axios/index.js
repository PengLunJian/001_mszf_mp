import Axios from './axios';
import apis from '../apis';
import wepyAxiosAdapter from 'wepy-plugin-axios/dist/adapter';

const CancelToken = Axios.CancelToken;
const source = CancelToken.source();
let reqList = [];
/**
 *
 * @param reqList
 * @param url
 * @param cancel
 * @param errorMessage
 */
const stopRepeatRequest = (reqList, url, cancel, errorMessage) => {
  errorMessage = errorMessage || '';
  console.log(reqList + url);
  for (let i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      cancel({url, errorMessage});
      return;
    }
  }
  reqList.push(url);
};
/**
 *
 * @param reqList
 * @param url
 */
const allowRequest = (reqList, url) => {
  for (let i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      reqList.splice(i, 1);
      break;
    }
  }
};
/**
 *
 * @param config
 * @returns {*}
 */
const getConfig = (config) => {
  const adapter = wepyAxiosAdapter(Axios);
  const {data} = config;
  const opts = config.url;
  config.adapter = adapter;
  config.method = apis.method;
  config.timeout = apis.timeout;
  config.headers = apis.headers;
  if (data) {
    const {url, params} = opts;
    config.url = apis.baseUrl + url;
    config.data = Object.assign(params, data);
  } else {
    const {url} = opts;
    config.url = apis.baseUrl + url;
  }
  return config;
};

Axios.interceptors.request.use(
  (config) => {
    const CONFIG = getConfig(config);
    return CONFIG;
  },
  (error) => {
    return Promise.reject(error);
  });

Axios.interceptors.response.use(
  (response) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response.data);
      }, 1000);
    });
  },
  (error) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(error.response);
      }, 1000);
    });
  });

export default Axios;
