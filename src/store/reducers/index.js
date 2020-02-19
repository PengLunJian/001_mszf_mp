import {combineReducers} from 'redux';
import HOUSELIST_REDUCER from './houseList';
import HOUSEDETAIL_REDUCER from './houseDetail';
import HOUSEFOLLOW_REDUCER from './houseFollow';
import HOUSEHISTORY_REDUCER from './houseHistory';
import HOUSEFAVORITE_REDUCER from './houseFavorite';
import HOTHOUSE_REDUCER from './hotHouse';

export default combineReducers({
  HOUSELIST_REDUCER,
  HOUSEDETAIL_REDUCER,
  HOUSEFOLLOW_REDUCER,
  HOUSEHISTORY_REDUCER,
  HOUSEFAVORITE_REDUCER,
  HOTHOUSE_REDUCER
});
