import React from 'react';
import { Provider } from 'react-redux';

// import Layout from './components/Layout/Layout';
import store from './store/store';
import TemplateListContainer from './containers/Templates/TemplateListContainer/TemplateListContainer';

const App = () => (
  <Provider store={store}>
    <TemplateListContainer />
  </Provider>
);

export default App;
