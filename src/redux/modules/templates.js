import createReducers from 'helpers/createReducers';
import actionCreaters from 'helpers/actionCreaters';
import server from 'fakeServer';
import store from '../configureStore';

// Actions

const GET_TEMPLATE_LIST_REQUEST = 'GET_TEMPLATE_LIST_REQUEST';
const GET_TEMPLATE_LIST_SUCCESS = 'GET_TEMPLATE_LIST_SUCCESS';
const GET_TEMPLATE_LIST_FAILURE = 'GET_TEMPLATE_LIST_FAILURE';

const GET_TEMPLATE_DETAILS_REQUEST = 'GET_TEMPLATE_DETAILS_REQUEST';
const GET_TEMPLATE_DETAILS_SUCCESS = 'GET_TEMPLATE_DETAILS_SUCCESS';
const GET_TEMPLATE_DETAILS_FAILURE = 'GET_TEMPLATE_DETAILS_FAILURE';

const CLEAR_TEMPLATE_DETAILS = 'CLEAR_TEMPLATE_DETAILS';

const UPDATE_TEMPLATE_REQUEST = 'UPDATE_TEMPLATE_REQUEST';
const UPDATE_TEMPLATE_SUCCESS = 'UPDATE_TEMPLATE_SUCCESS';
const UPDATE_TEMPLATE_FAILURE = 'UPDATE_TEMPLATE_FAILURE';

// Reducer

const initialState = {
  isRequest: false,
  templateList: [],
  templateDetails: null,
  error: null,
};

const actions = {
  [GET_TEMPLATE_LIST_REQUEST]: state => ({ ...state, isRequest: true }),
  [GET_TEMPLATE_LIST_SUCCESS]: (state, action) => ({
    ...state,
    isRequest: false,
    templateList: action.data,
  }),
  [GET_TEMPLATE_LIST_FAILURE]: (state, action) => ({
    ...state,
    isRequest: false,
    error: action.error,
  }),
  [GET_TEMPLATE_DETAILS_REQUEST]: state => ({ ...state, isRequest: true }),
  [GET_TEMPLATE_DETAILS_SUCCESS]: (state, action) => ({
    ...state,
    isRequest: false,
    templateDetails: action.data,
  }),
  [GET_TEMPLATE_DETAILS_FAILURE]: (state, action) => ({
    ...state,
    isRequest: false,
    error: action.error,
  }),
  [UPDATE_TEMPLATE_REQUEST]: state => ({ ...state, isRequest: true }),
  [UPDATE_TEMPLATE_SUCCESS]: (state, action) => ({
    ...state,
    isRequest: false,
    templateList: [
      ...state.templateList.slice(0, action.index),
      action.data,
      ...state.templateList.slice(action.index + 1),
    ],
  }),
  [UPDATE_TEMPLATE_FAILURE]: (state, action) => ({
    ...state,
    isRequest: false,
    error: action.error,
  }),
  [CLEAR_TEMPLATE_DETAILS]: state => ({ ...state, templateDetails: null }),
};

export default createReducers(initialState, actions);

// Action Creators

const fakeServer = server();

const index = id => store.getState().templates.templateList.findIndex(item => item.id === id);

export const getTemplateList = () => actionCreaters('GET_TEMPLATE_LIST', () => fakeServer.getAll());

export const getTemplateDetails = id => actionCreaters('GET_TEMPLATE_DETAILS', () => fakeServer.getOne(id));

export const updateTemplate = (id, payload) => actionCreaters('UPDATE_TEMPLATE', () => fakeServer.updateItem(id, payload), index(id));

export const clearTemplateDetails = () => ({ type: CLEAR_TEMPLATE_DETAILS });