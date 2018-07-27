import types from '../types/templateTypes';
import createReducers from '../../helpers/createReducers';

const initialState = {
  isRequest: false,
  templateList: [],
  templateDetails: null,
};

const actions = {
  [types.GET_TEMPLATE_LIST_REQUEST]: state => ({ ...state, isRequest: true }),
  [types.GET_TEMPLATE_LIST_SUCCESS]: (state, action) => ({
    ...state,
    isRequest: false,
    templateList: action.data,
  }),
  [types.GET_TEMPLATE_LIST_FAILURE]: (state, action) => ({
    ...state,
    isRequest: false,
    error: action.error,
  }),
  [types.GET_TEMPLATE_DETAILS_REQUEST]: state => ({ ...state, isRequest: true }),
  [types.GET_TEMPLATE_DETAILS_SUCCESS]: (state, action) => ({
    ...state,
    isRequest: false,
    templateDetails: action.data,
  }),
  [types.GET_TEMPLATE_DETAILS_FAILURE]: (state, action) => ({
    ...state,
    isRequest: false,
    error: action.error,
  }),
  [types.UPDATE_TEMPLATE_REQUEST]: state => ({ ...state, isRequest: true }),
  [types.UPDATE_TEMPLATE_SUCCESS]: (state, action) => ({
    ...state,
    isRequest: false,
    templateList: [
      ...state.templateList.slice(0, action.index),
      action.data,
      ...state.templateList.slice(action.index + 1),
    ],
  }),
  [types.UPDATE_TEMPLATE_FAILURE]: (state, action) => ({
    ...state,
    isRequest: false,
    error: action.error,
  }),
  [types.CLEAR_TEMPLATE_DETAILS]: state => ({ ...state, templateDetails: null }),
};

export default createReducers(initialState, actions);
