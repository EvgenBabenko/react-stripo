import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import history from '../../../helpers/history';
import TemplateListContainer from '../../../containers/TemplateListContainer/TemplateListContainer';
import TemplateDetailsContainer from '../../../containers/TemplateDetailsContainer/TemplateDetailsContainer';
import NotFound from './404/404';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={TemplateListContainer} />
      <Route path="/template/:id" component={TemplateDetailsContainer} />
      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;