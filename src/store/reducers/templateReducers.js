import types from '../types/templateTypes';
import createReducers from '../../helpers/createReducers';

const initialState = {
  templateList: [],
  templateDetails: null,
};

const actions = {
  [types.GET_TEMPLATE_LIST]: (state, action) => ({ ...state, templateList: action.data }),
  [types.GET_TEMPLATE_DETAILS]: (state, action) => ({ ...state, templateDetails: action.data }),
  [types.CLEAR_TEMPLATE_DETAILS]: (state, action) => ({ ...state, templateDetails: null }),
};

export default createReducers(initialState, actions);
