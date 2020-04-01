import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_FAVORITE_REDUCER.isLoading,
  isSuccess: state => state.SELECT_FAVORITE_REDUCER.isSuccess,
  isFailure: state => state.SELECT_FAVORITE_REDUCER.isFailure,
  isData: state => state.SELECT_FAVORITE_REDUCER.data
};

export const ACTIONS = {
  removeFavoriteReplace: actions.removeFavoriteReplace,
  ajaxSelectFavorite: params => actions.ajaxRequestSelectFavorite(params)
};
