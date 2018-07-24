import types from '../types/templateTypes';

const initialState = {
  templateList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TEMPLATE_LIST:
      return {
        ...state,
        templateList: action.data,
      };
    default:
      return state;
  }
};
