import * as actions from '../../store/actions';

export const STATES = {
  isLoading: state => state.PRODUCT_REDUCER.product.isLoading,
  isSuccess: state => state.PRODUCT_REDUCER.product.isSuccess,
  isFailure: state => state.PRODUCT_REDUCER.product.isFailure,
  isData: state => state.PRODUCT_REDUCER.product.data
};

export const ACTIONS = {
  ajaxProduct: actions.ajaxRequestProduct
};
