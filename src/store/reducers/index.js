import {combineReducers} from 'redux';
import RENTHOUSELIST_REDUCER from './rentHouseList';
import HOUSEDETAIL_REDUCER from './houseDetail';
import HOUSEFOLLOW_REDUCER from './houseFollow';

export default combineReducers({
  RENTHOUSELIST_REDUCER,
  HOUSEDETAIL_REDUCER,
  HOUSEFOLLOW_REDUCER
});
