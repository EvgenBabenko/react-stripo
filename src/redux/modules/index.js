import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import templates from './templates';

export default combineReducers({
  templates,
  router: routerReducer,
});
