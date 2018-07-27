import types from '../types/templateTypes';
import mock from '../../mock';

export const getTemplateList = () => {
  const data = mock;

  return ({ type: types.GET_TEMPLATE_LIST, data });
};

export const getTemplateDetails = (id) => {
  const data = mock.find(item => item.id === id);

  return ({ type: types.GET_TEMPLATE_DETAILS, data });
};

export const updateTemplate = (id, payload) => {
  const prev = mock.find(item => item.id === id);
  const index = mock.findIndex(item => item.id === id);

  prev.template = payload;
  prev.modified = Date.now();

  const data = prev;

  return ({ type: types.UPDATE_TEMPLATE, data, index });
};

export const clearTemplateDetails = () => ({ type: types.CLEAR_TEMPLATE_DETAILS });
