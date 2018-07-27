import types from '../types/templateTypes';
import server from '../../fakeServer';
import store from '../store';
import actionCreaters from '../../helpers/actionCreaters';

const fakeServer = server();

const index = id => store.getState().templates.templateList.findIndex(item => item.id === id);

export const getTemplateList = () => actionCreaters('GET_TEMPLATE_LIST', () => fakeServer.getAll());
export const getTemplateDetails = id => actionCreaters('GET_TEMPLATE_DETAILS', () => fakeServer.getOne(id));
export const updateTemplate = (id, payload) => actionCreaters('UPDATE_TEMPLATE', () => fakeServer.updateItem(id, payload), index(id));

// export const getTemplateList = () => async (dispatch) => {
//   const data = await fakeServer.getAll();

//   dispatch({ type: types.GET_TEMPLATE_LIST, data });
// };

// export const getTemplateDetails = id => async (dispatch) => {
//   const data = await fakeServer.getOne(id);

//   dispatch({ type: types.GET_TEMPLATE_DETAILS, data });
// };

// export const updateTemplate = (id, payload) => async (dispatch) => {
//   const data = await fakeServer.updateItem(id, payload);

//   const index = store.getState().templates.templateList.findIndex(template => template.id === id);

//   dispatch({ type: types.UPDATE_TEMPLATE, data, index });
// };

export const clearTemplateDetails = () => ({ type: types.CLEAR_TEMPLATE_DETAILS });
