const apis = {
  baseUrl: 'https://apis.xuhuihealth.cn/',
  method: 'POST',
  timeout: 5000,
  dataType: 'json',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  selectBanner: {
    url: 'select/banner'
  },
  selectEvaluate: {
    url: 'select/evaluate'
  },
  selectProduct: {
    url: 'select/product'
  }
};

export default apis;
