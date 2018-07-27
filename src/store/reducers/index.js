import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import templates from './templateReducers';

export default combineReducers({
  templates,
  router: routerReducer,
});
