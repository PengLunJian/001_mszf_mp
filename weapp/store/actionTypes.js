"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RESET_HOUSEFAVORITE_STATE = exports.SELECT_HOUSEFAVORITENEW_FAILURE = exports.SELECT_HOUSEFAVORITENEW_SUCCESS = exports.SELECT_HOUSEFAVORITENEW_REQUEST = exports.SELECT_HOUSEFAVORITESECOND_FAILURE = exports.SELECT_HOUSEFAVORITESECOND_SUCCESS = exports.SELECT_HOUSEFAVORITESECOND_REQUEST = exports.SELECT_HOUSEFAVORITERENT_FAILURE = exports.SELECT_HOUSEFAVORITERENT_SUCCESS = exports.SELECT_HOUSEFAVORITERENT_REQUEST = exports.UPDATE_HOUSEUNFOLLOW_FAILURE = exports.UPDATE_HOUSEUNFOLLOW_SUCCESS = exports.UPDATE_HOUSEUNFOLLOW_REQUEST = exports.UPDATE_HOUSEFOLLOW_FAILURE = exports.UPDATE_HOUSEFOLLOW_SUCCESS = exports.UPDATE_HOUSEFOLLOW_REQUEST = exports.SELECT_HOUSEDETAIL_FAILURE = exports.SELECT_HOUSEDETAIL_SUCCESS = exports.SELECT_HOUSEDETAIL_REQUEST = exports.RESET_HOUSEHISTORY_STATE = exports.SELECT_HOUSEHISTORY_FAILURE = exports.SELECT_HOUSEHISTORY_SUCCESS = exports.SELECT_HOUSEHISTORY_REQUEST = exports.SELECT_HOTHOUSE_FAILURE = exports.SELECT_HOTHOUSE_SUCCESS = exports.SELECT_HOTHOUSE_REQUEST = exports.RESET_HOUSELIST_STATE = exports.SELECT_HOUSELIST_FAILURE = exports.SELECT_HOUSELIST_SUCCESS = exports.SELECT_HOUSELIST_REQUEST = void 0;
var SELECT_HOUSELIST_REQUEST = 'SELECT_HOUSELIST_REQUEST';
exports.SELECT_HOUSELIST_REQUEST = SELECT_HOUSELIST_REQUEST;
var SELECT_HOUSELIST_SUCCESS = 'SELECT_HOUSELIST_SUCCESS';
exports.SELECT_HOUSELIST_SUCCESS = SELECT_HOUSELIST_SUCCESS;
var SELECT_HOUSELIST_FAILURE = 'SELECT_HOUSELIST_FAILURE';
exports.SELECT_HOUSELIST_FAILURE = SELECT_HOUSELIST_FAILURE;
var RESET_HOUSELIST_STATE = 'RESET_HOUSELIST_STATE';
exports.RESET_HOUSELIST_STATE = RESET_HOUSELIST_STATE;
var SELECT_HOTHOUSE_REQUEST = 'SELECT_HOTHOUSE_REQUEST';
exports.SELECT_HOTHOUSE_REQUEST = SELECT_HOTHOUSE_REQUEST;
var SELECT_HOTHOUSE_SUCCESS = 'SELECT_HOTHOUSE_SUCCESS';
exports.SELECT_HOTHOUSE_SUCCESS = SELECT_HOTHOUSE_SUCCESS;
var SELECT_HOTHOUSE_FAILURE = 'SELECT_HOTHOUSE_FAILURE';
exports.SELECT_HOTHOUSE_FAILURE = SELECT_HOTHOUSE_FAILURE;
var SELECT_HOUSEHISTORY_REQUEST = 'SELECT_HOUSEHISTORY_REQUEST';
exports.SELECT_HOUSEHISTORY_REQUEST = SELECT_HOUSEHISTORY_REQUEST;
var SELECT_HOUSEHISTORY_SUCCESS = 'SELECT_HOUSEHISTORY_SUCCESS';
exports.SELECT_HOUSEHISTORY_SUCCESS = SELECT_HOUSEHISTORY_SUCCESS;
var SELECT_HOUSEHISTORY_FAILURE = 'SELECT_HOUSEHISTORY_FAILURE';
exports.SELECT_HOUSEHISTORY_FAILURE = SELECT_HOUSEHISTORY_FAILURE;
var RESET_HOUSEHISTORY_STATE = 'RESET_HOUSEHISTORY_STATE';
exports.RESET_HOUSEHISTORY_STATE = RESET_HOUSEHISTORY_STATE;
var SELECT_HOUSEDETAIL_REQUEST = 'SELECT_HOUSEDETAIL_REQUEST';
exports.SELECT_HOUSEDETAIL_REQUEST = SELECT_HOUSEDETAIL_REQUEST;
var SELECT_HOUSEDETAIL_SUCCESS = 'SELECT_HOUSEDETAIL_SUCCESS';
exports.SELECT_HOUSEDETAIL_SUCCESS = SELECT_HOUSEDETAIL_SUCCESS;
var SELECT_HOUSEDETAIL_FAILURE = 'SELECT_HOUSEDETAIL_FAILURE';
exports.SELECT_HOUSEDETAIL_FAILURE = SELECT_HOUSEDETAIL_FAILURE;
var UPDATE_HOUSEFOLLOW_REQUEST = 'UPDATE_HOUSEFOLLOW_REQUEST';
exports.UPDATE_HOUSEFOLLOW_REQUEST = UPDATE_HOUSEFOLLOW_REQUEST;
var UPDATE_HOUSEFOLLOW_SUCCESS = 'UPDATE_HOUSEFOLLOW_SUCCESS';
exports.UPDATE_HOUSEFOLLOW_SUCCESS = UPDATE_HOUSEFOLLOW_SUCCESS;
var UPDATE_HOUSEFOLLOW_FAILURE = 'UPDATE_HOUSEFOLLOW_FAILURE';
exports.UPDATE_HOUSEFOLLOW_FAILURE = UPDATE_HOUSEFOLLOW_FAILURE;
var UPDATE_HOUSEUNFOLLOW_REQUEST = 'UPDATE_HOUSEUNFOLLOW_REQUEST';
exports.UPDATE_HOUSEUNFOLLOW_REQUEST = UPDATE_HOUSEUNFOLLOW_REQUEST;
var UPDATE_HOUSEUNFOLLOW_SUCCESS = 'UPDATE_HOUSEUNFOLLOW_SUCCESS';
exports.UPDATE_HOUSEUNFOLLOW_SUCCESS = UPDATE_HOUSEUNFOLLOW_SUCCESS;
var UPDATE_HOUSEUNFOLLOW_FAILURE = 'UPDATE_HOUSEUNFOLLOW_FAILURE';
exports.UPDATE_HOUSEUNFOLLOW_FAILURE = UPDATE_HOUSEUNFOLLOW_FAILURE;
var SELECT_HOUSEFAVORITERENT_REQUEST = 'SELECT_HOUSEFAVORITERENT_REQUEST';
exports.SELECT_HOUSEFAVORITERENT_REQUEST = SELECT_HOUSEFAVORITERENT_REQUEST;
var SELECT_HOUSEFAVORITERENT_SUCCESS = 'SELECT_HOUSEFAVORITERENT_SUCCESS';
exports.SELECT_HOUSEFAVORITERENT_SUCCESS = SELECT_HOUSEFAVORITERENT_SUCCESS;
var SELECT_HOUSEFAVORITERENT_FAILURE = 'SELECT_HOUSEFAVORITERENT_FAILURE';
exports.SELECT_HOUSEFAVORITERENT_FAILURE = SELECT_HOUSEFAVORITERENT_FAILURE;
var SELECT_HOUSEFAVORITESECOND_REQUEST = 'SELECT_HOUSEFAVORITESECOND_REQUEST';
exports.SELECT_HOUSEFAVORITESECOND_REQUEST = SELECT_HOUSEFAVORITESECOND_REQUEST;
var SELECT_HOUSEFAVORITESECOND_SUCCESS = 'SELECT_HOUSEFAVORITESECOND_SUCCESS';
exports.SELECT_HOUSEFAVORITESECOND_SUCCESS = SELECT_HOUSEFAVORITESECOND_SUCCESS;
var SELECT_HOUSEFAVORITESECOND_FAILURE = 'SELECT_HOUSEFAVORITESECOND_FAILURE';
exports.SELECT_HOUSEFAVORITESECOND_FAILURE = SELECT_HOUSEFAVORITESECOND_FAILURE;
var SELECT_HOUSEFAVORITENEW_REQUEST = 'SELECT_HOUSEFAVORITENEW_REQUEST';
exports.SELECT_HOUSEFAVORITENEW_REQUEST = SELECT_HOUSEFAVORITENEW_REQUEST;
var SELECT_HOUSEFAVORITENEW_SUCCESS = 'SELECT_HOUSEFAVORITENEW_SUCCESS';
exports.SELECT_HOUSEFAVORITENEW_SUCCESS = SELECT_HOUSEFAVORITENEW_SUCCESS;
var SELECT_HOUSEFAVORITENEW_FAILURE = 'SELECT_HOUSEFAVORITENEW_FAILURE';
exports.SELECT_HOUSEFAVORITENEW_FAILURE = SELECT_HOUSEFAVORITENEW_FAILURE;
var RESET_HOUSEFAVORITE_STATE = 'RESET_HOUSEFAVORITE_STATE';
exports.RESET_HOUSEFAVORITE_STATE = RESET_HOUSEFAVORITE_STATE;