/**
 *
 * @param key
 * @param value
 */
export const setItem = (key, value) => {
  try {
    wx.setStorageSync(key, value);
  } catch (e) {
    console.log(e);
  }
};
/**
 *
 * @param key
 * @returns {any}
 */
export const getItem = (key) => {
  let value = null;
  try {
    value = wx.getStorageSync(key);
  } catch (e) {
    console.log(e);
  }
  return value;
};
/**
 *
 * @param key
 */
export const removeItem = (key) => {
  try {
    wx.removeStorageSync(key);
  } catch (e) {
    console.log(e);
  }
};
