const apis = {
  baseUrl: 'https://mszfzjd.cn/house/api',
  fileUrl: 'https://mszfzjd.cn',
  method: 'POST',
  timeout: 5000,
  dataType: 'json',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  selectLogin: {
    url: '/user/getOpenId',
    params: {
      code: ''
    }
  },
  selectPhone: {
    url: '/user/gePhone',
    params: {
      id: '',
      iv: '',
      sessionKey: '',
      encryptedData: ''
    }
  },
  selectHotHouse: {
    url: '/house/select',
    params: {
      pageSize: 5,
      pageIndex: 1
    }
  },
  selectHouse: {
    url: '/house/select',
    params: {
      pageIndex: 1,
      pageSize: 10
    }
  },
  selectDetail: {
    url: '/house/detail/select',
    params: {
      id: 1,
      phone: ''
    }
  },
  updateFollow: {
    url: '/conllect/insert',
    params: {
      houseId: '',
      phone: '',
      isFollow: 1
    }
  },
  selectFollow: {
    url: '/collect/select',
    params: {
      pageSize: 10,
      pageIndex: 1,
      phone: '',
      type: ''
    }
  },
  selectHistory: {
    url: '/history/select',
    params: {
      pageSize: 10,
      pageIndex: 1,
      phone: ''
    }
  }
};

export default apis;
