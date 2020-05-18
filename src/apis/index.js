const apis = {
  baseUrl: 'http://118.190.202.38:8181/api',
  fileUrl: 'http://47.103.197.178:8080',
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
      phone: ''
    }
  },
  updateUnfollow: {
    url: '/collect/delete',
    params: {
      houseId: '',
      phone: ''
    }
  },
  selectFavorite: {
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
