/**
 *
 * @returns {boolean}
 */
export const success = () => {
  const nums = parseInt(Math.random() * 100);
  return nums % 19 !== 0;
};
/**
 *
 * @param data
 * @returns {boolean}
 */
export const isExist = (data) => {
  return (
    (
      (!data) ||
      (data instanceof Array && !data.length) ||
      (JSON.stringify(data) === '{}')
    )
  );
};
/**
 *
 * @param params
 * @returns {*}
 */
export const stringify = (params) => {
  for (let key in params) {
    if (params[key] instanceof Array) {
      params[key] = JSON.stringify(params[key]);
    }
  }
  return params;
};
/**
 *
 * @param data
 * @returns {*}
 */
export const dataFilter = (data) => {
  data.map((item) => {
    item.tags = item.tags.split(' ');
  });
  return data;
};
