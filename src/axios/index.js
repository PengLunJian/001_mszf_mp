import Axios from 'axios/dist/axios';
import apis from '../apis';
import * as utils from '../utils';
import wepyAxiosAdapter from 'wepy-plugin-axios/dist/adapter';

/**
 *
 * @param config
 * @returns {*}
 */
const getConfig = (config) => {
  const {method} = config;
  const opts = config.url;
  const {url} = opts;
  config.timeout = apis.timeout;
  config.headers = apis.headers;
  config.adapter = wepyAxiosAdapter(Axios);
  config.url = apis.baseUrl + url;
  if (method === 'get') {
    config.params = Object.assign({}, config.params);
    config.params = utils.stringify(config.params);
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
      resolve(response.data);
    });
  },
  (error) => {
    return new Promise((resolve) => {
      resolve(error.response);
    });
  });

export default Axios;
