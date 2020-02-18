"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HOTHOUSENEW_STATE = exports.HOTHOUSESECOND_STATE = exports.HOTHOUSERENT_STATE = exports.HOUSEFAVORITE_STATE = exports.HOUSEUNFOLLOW_STATE = exports.HOUSEFOLLOW_STATE = exports.HOUSEDETAIL_STATE = exports.HOUSEHISTORY_STATE = exports.HOUSELIST_STATE = void 0;
var HOUSELIST_STATE = {
  isLoading: true,
  isSuccess: false,
  isFailure: false,
  data: null,
  totalRowsFilter: []
};
exports.HOUSELIST_STATE = HOUSELIST_STATE;
var HOUSEHISTORY_STATE = {
  isLoading: true,
  isSuccess: false,
  isFailure: false,
  data: null
};
exports.HOUSEHISTORY_STATE = HOUSEHISTORY_STATE;
var HOUSEDETAIL_STATE = {
  isLoading: true,
  isSuccess: false,
  isFailure: false,
  data: null
};
exports.HOUSEDETAIL_STATE = HOUSEDETAIL_STATE;
var HOUSEFOLLOW_STATE = {
  isLoading: true,
  isSuccess: false,
  isFailure: false,
  data: null
};
exports.HOUSEFOLLOW_STATE = HOUSEFOLLOW_STATE;
var HOUSEUNFOLLOW_STATE = {
  isLoading: true,
  isSuccess: false,
  isFailure: false,
  data: null
};
exports.HOUSEUNFOLLOW_STATE = HOUSEUNFOLLOW_STATE;
var HOUSEFAVORITE_STATE = {
  rentHouse: {
    isLoading: true,
    isSuccess: false,
    isFailure: false,
    data: null
  },
  secondHouse: {
    isLoading: true,
    isSuccess: false,
    isFailure: false,
    data: null
  },
  newHouse: {
    isLoading: true,
    isSuccess: false,
    isFailure: false,
    data: null
  }
};
exports.HOUSEFAVORITE_STATE = HOUSEFAVORITE_STATE;
var HOTHOUSERENT_STATE = {
  isLoading: true,
  isSuccess: false,
  isFailure: false,
  data: []
};
exports.HOTHOUSERENT_STATE = HOTHOUSERENT_STATE;
var HOTHOUSESECOND_STATE = {
  isLoading: true,
  isSuccess: false,
  isFailure: false,
  data: []
};
exports.HOTHOUSESECOND_STATE = HOTHOUSESECOND_STATE;
var HOTHOUSENEW_STATE = {
  isLoading: true,
  isSuccess: false,
  isFailure: false,
  data: []
};
exports.HOTHOUSENEW_STATE = HOTHOUSENEW_STATE;