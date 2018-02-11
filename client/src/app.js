// npm packages
import React from 'react';
import {Route, Switch} from 'react-router-dom';

import 'bulma/css/bulma.css';

// our packages
import Navigation from './scenes/Navigation';
import Dashboard from './scenes/Dashboard';
import ClassicLeague from './scenes/ClassicLeague';
import H2HLeague from './scenes/H2HLeague';
import Errors from './components/errors';

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/classicleague" component={ClassicLeague} />
      <Route path="/h2hleague" component={H2HLeague} />
      <Route component={Errors.NotFound} />
    </Switch>
  </div>
);

export default App;
