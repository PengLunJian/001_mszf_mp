import {combineReducers} from 'redux';
import HOME_REDUCER from './home';
import CART_REDUCER from './cart';

export default combineReducers({
  HOME_REDUCER,
  CART_REDUCER
});
