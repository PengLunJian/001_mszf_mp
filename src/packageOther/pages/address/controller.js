import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_CITYS_REDUCER.isLoading,
  isSuccess: state => state.SELECT_CITYS_REDUCER.isSuccess,
  isFailure: state => state.SELECT_CITYS_REDUCER.isFailure,
  isData: state => state.SELECT_CITYS_REDUCER.data,
  isCity: state => state.UPDATE_CITYS_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectCitys: actions.ajaxRequestSelectCitys,
  updateCitysReplace: params => actions.updateCitysReplace(params),
  ajaxSelectAreas: params => actions.ajaxRequestSelectAreas(params),
  ajaxSelectHotHouse: params => actions.ajaxRequestSelectHotHouse(params)
};
