"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var apis = {
  baseUrl: 'http://sersms.com:7000/',
  method: 'POST',
  timeout: 5000,
  dataType: 'json',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  selectHouseList: {
    url: 'house/v1/houser/house/list',
    params: {
      page: {
        pageSize: 10,
        pageIndex: 1
      },
      filter: [{
        field: 'type',
        opt: '=',
        value: 3
      }],
      sort: [{
        field: 'id',
        asc: false
      }]
    }
  },
  selectHouseDetail: {
    url: 'house/v1/houser/house/detail',
    params: {
      house_id: 1
    }
  },
  updateHouseFollow: {
    url: 'house/v1/houser/house/follow',
    params: {
      house_id: 1
    }
  },
  updateHouseUnfollow: {
    url: 'house/v1/houser/house/unfollow',
    params: {
      house_id: 1
    }
  },
  selectHouseFavorite: {
    url: 'house/v1/houser/house/followed',
    params: {
      page: {
        pageSize: 10,
        pageIndex: 1
      },
      filter: [{
        field: 'id',
        opt: '>=',
        value: 2
      }]
    }
  },
  selectHouseHistory: {
    url: 'house/v1/houser/house/history',
    params: {
      page: {
        pageSize: 10,
        pageIndex: 1
      },
      filter: [{
        field: '',
        opt: '',
        value: 0
      }]
    }
  }
};
var _default = apis;
exports["default"] = _default;