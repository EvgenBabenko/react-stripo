import types from '../types/templateTypes';
import mock from '../../mock';

export const getTemplateList = () => {
  const data = mock;

  return ({ type: types.GET_TEMPLATE_LIST, data });
};

export const getTemplateDetails = (id) => {
  const data = mock.find(item => item.id === id);

  console.log(data, mock)

  return ({ type: types.GET_TEMPLATE_DETAILS, data });
};

export const clearTemplateDetails = () => ({ type: types.CLEAR_TEMPLATE_DETAILS });
