import types from '../types/templateTypes';
import server from '../../fakeServer';
import store from '../store';
import actionCreaters from '../../helpers/actionCreaters';

const fakeServer = server();

const index = id => store.getState().templates.templateList.findIndex(item => item.id === id);

export const getTemplateList = () => actionCreaters('GET_TEMPLATE_LIST', () => fakeServer.getAll());

export const getTemplateDetails = id => actionCreaters('GET_TEMPLATE_DETAILS', () => fakeServer.getOne(id));

export const updateTemplate = (id, payload) => actionCreaters('UPDATE_TEMPLATE', () => fakeServer.updateItem(id, payload), index(id));

export const clearTemplateDetails = () => ({ type: types.CLEAR_TEMPLATE_DETAILS });
