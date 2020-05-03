const apis = {
  baseUrl: 'http://192.168.5.12:8181/api',
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
    url: '/house/v1/houser/house/list',
    params: {
      page: {
        pageSize: 5,
        pageIndex: 1
      },
      filter: [
        {
          field: 'type',
          opt: '=',
          value: 1
        }
      ],
      sort: [
        {
          field: 'release_time',
          asc: false
        }
      ]
    }
  },
  selectHouse: {
    url: '/house/v1/houser/house/list',
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
      ],
      sort: [
        {
          field: 'id',
          asc: false
        }
      ]
    }
  },
  selectDetail: {
    url: '/house/v1/houser/house/detail',
    params: {
      house_id: 1
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
