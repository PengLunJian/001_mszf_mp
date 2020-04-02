import {combineReducers} from 'redux';
import SELECT_LOGIN_REDUCER from './selectLogin';
import SELECT_CITYS_REDUCER from './selectCitys';
import SELECT_HOUSE_REDUCER from './selectHouse';
import SELECT_DETAIL_REDUCER from './selectDetail';
import UPDATE_FOLLOW_REDUCER from './updateFollow';
import SELECT_HISTORY_REDUCER from './selectHistory';
import SELECT_FAVORITE_REDUCER from './selectFavorite';
import SELECT_HOTHOUSE_REDUCER from './selectHotHouse';

export default combineReducers({
  SELECT_LOGIN_REDUCER,
  SELECT_CITYS_REDUCER,
  SELECT_HOUSE_REDUCER,
  SELECT_DETAIL_REDUCER,
  UPDATE_FOLLOW_REDUCER,
  SELECT_HISTORY_REDUCER,
  SELECT_FAVORITE_REDUCER,
  SELECT_HOTHOUSE_REDUCER
});
