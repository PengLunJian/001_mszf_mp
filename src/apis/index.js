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
    url: '/house/v1/houser/house/follow',
    params: {
      house_id: 1
    }
  },
  updateUnfollow: {
    url: '/house/v1/houser/house/unfollow',
    params: {
      house_id: 1
    }
  },
  selectFavorite: {
    url: '/house/v1/houser/house/followed',
    params: {
      page: {
        pageSize: 10,
        pageIndex: 1
      },
      filter: [
        {
          field: 'id',
          opt: '>=',
          value: 2
        }
      ]
    }
  },
  selectHistory: {
    url: '/house/v1/houser/house/history',
    params: {
      page: {
        pageSize: 10,
        pageIndex: 1
      },
      filter: [
        {
          field: '',
          opt: '',
          value: 0
        }
      ]
    }
  }
};

export default apis;
