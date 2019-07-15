import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Detail from './containers/Detail';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/detail" component={Detail} exact />
    </Switch>
  );
}

export default Routes;
