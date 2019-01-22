import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';

import history from '../helpers/history';
import reducers from './modules';

const router = routerMiddleware(history.history);

const middlewares = [
  thunk,
  router,
];

export default createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
