import apis from '../apis';

let requestTask = null;
/**
 *
 * @param api
 * @param data
 * @returns {*}
 */
export const get = (api, data) => {
  return all(api, data, apis.headers, 'GET');
};
/**
 *
 * @param api
 * @param data
 * @returns {*}
 */
export const post = (api, data) => {
  return all(api, data, apis.headers, 'POST');
};
/**
 *
 * @param api
 * @param data
 * @param header
 * @param method
 * @returns {Promise<any>}
 */
export const all = (api, data, header, method) => {
  console.log(requestTask);
  if (requestTask) requestTask.abort();
  return new Promise((resolve, reject) => {
    requestTask = wx.request({
      url: apis.baseUrl + api.url,
      header: header,
      data: data,
      method: method,
      success: (res) => {
        setTimeout(() => {
          resolve(res);
        }, 1000);
      },
      fail: (err) => {
        setTimeout(() => {
          reject(err);
        }, 1000);
      }
    });
    console.log(requestTask);
  });
};
