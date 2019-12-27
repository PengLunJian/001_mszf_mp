const apis = {
  baseUrl: 'http://sersms.com:7000/',
  method: 'POST',
  timeout: 5000,
  dataType: 'json',
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json; charset=UTF-8'
  },
  selectRentHouseList: {
    url: 'house/v1/houser/house/list',
    params: {
      page: {
        pageSize: 10,
        pageIndex: 1
      },
      filter: [
        {
          field: 'type',
          opt: '=',
          value: 3
        }
      ]
    }
  }
};

export default apis;
