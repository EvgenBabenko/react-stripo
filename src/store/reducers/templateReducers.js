import types from '../types/templateTypes';
import createReducers from '../../helpers/createReducers';

const initialState = {
  templateList: [],
  templateDetails: null,
  activeTarget: null,
};

const actions = {
  [types.GET_TEMPLATE_LIST]: (state, action) => ({ ...state, templateList: action.data }),
  [types.GET_TEMPLATE_DETAILS]: (state, action) => ({ ...state, templateDetails: action.data }),
  [types.UPDATE_TEMPLATE]: (state, action) => ({
    ...state,
    templateList: [
      ...state.templateList.slice(0, action.index),
      action.data,
      ...state.templateList.slice(action.index + 1),
    ],
  }),
  [types.CLEAR_TEMPLATE_DETAILS]: (state, action) => ({ ...state, templateDetails: null }),
};

export default createReducers(initialState, actions);
